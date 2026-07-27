import { NextResponse } from "next/server";
import { z } from "zod";
import { getLeadRoute } from "@/content/routes";
import { routeSchema } from "@/lib/validation/enquiry";

/**
 * Single generic lead-submission endpoint for every EnquiryWizard instance
 * (08-technical.md §1: "Next.js Route Handlers on Vercel → zod validation →
 * webhook/CRM adapter + email ack"). Phase 1 = generic webhook forwarding
 * (LEAD_WEBHOOK_URL); a real CRM adapter replaces the forward call at
 * Phase 3 without EnquiryWizard or this route's shape needing to change.
 *
 * Rate limiting (Upstash, per 10-quality-and-launch.md §3) isn't wired up
 * yet — no Upstash instance is provisioned. Honeypot + field validation
 * are real; add rate limiting here once UPSTASH_REDIS_REST_URL exists.
 */
const envelopeSchema = z.object({
  route: z.string(),
  data: z.record(z.string(), z.unknown()),
  honeypot: z.string().optional(),
  consentVersion: z.string(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const envelope = envelopeSchema.safeParse(body);
  if (!envelope.success) {
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const { route: routeName, data, honeypot, consentVersion } = envelope.data;

  // Honeypot: a real user never fills this hidden field.
  if (honeypot) {
    return NextResponse.json({ error: "rejected" }, { status: 400 });
  }

  const routeConfig = getLeadRoute(routeName);
  if (!routeConfig) {
    return NextResponse.json({ error: "unknown_route" }, { status: 400 });
  }

  const fields = routeSchema(routeConfig).safeParse(data);
  if (!fields.success) {
    return NextResponse.json(
      { error: "validation_failed", issues: fields.error.issues },
      { status: 400 },
    );
  }

  const pipeline =
    typeof routeConfig.pipeline === "function" ? routeConfig.pipeline(fields.data) : routeConfig.pipeline;

  const submission = {
    route: routeName,
    pipeline,
    data: fields.data,
    consentVersion,
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(submission),
      });
    } catch (err) {
      console.error("lead webhook forward failed", err);
      return NextResponse.json({ error: "forward_failed" }, { status: 502 });
    }
  } else {
    // No webhook configured yet — log so submissions aren't silently dropped in the meantime.
    console.log("[lead submission]", JSON.stringify(submission));
  }

  return NextResponse.json({ ok: true, pipeline, thankYouPath: routeConfig.thankYouPath });
}
