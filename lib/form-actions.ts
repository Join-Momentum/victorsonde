"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { fieldError, forms, isEmail, type FormKind, type FormState } from "./forms";
import { createToken, readToken, siteUrl } from "./subscribe-token";

/**
 * Form handlers. Spam protection: a honeypot field, a minimum completion time and a per-address
 * rate limit (Next.js already rejects cross-origin Server Action calls). Submissions are delivered
 * as plain-text email through Resend; nothing is stored or logged.
 */

const RESEND = "https://api.resend.com";
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
// Best-effort limit held in memory per server instance.
const hits = new Map<string, number[]>();

async function rateLimited(): Promise<boolean> {
  const h = await headers();
  const ip = (h.get("x-forwarded-for") ?? "").split(",")[0].trim() || h.get("x-real-ip") || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

/**
 * Why a submission looks automated, or nothing: the hidden field was filled, or the form was sent
 * implausibly fast. A missing timing value (JavaScript not yet running) is not treated as spam.
 */
function automatedReason(data: FormData): string | undefined {
  if (data.get("vs_hp")) return "honeypot";
  const elapsed = Number(data.get("elapsed"));
  if (data.has("elapsed") && elapsed < 2500) return `too fast (${elapsed}ms)`;
}

/** Drops the submission quietly for the sender, but leaves a trace in the server log. */
function dropped(kind: string, reason: string) {
  console.warn(`[forms] ${kind} submission dropped as automated: ${reason}`);
}

const text = (data: FormData, key: string) => String(data.get(key) ?? "").trim();
const oneLine = (value: string) => value.replace(/[\r\n\t]+/g, " ").trim();

const RATE_LIMITED: FormState = {
  status: "error",
  message: "Too many messages in a short time. Wait ten minutes and try again.",
};
const NOT_CONFIGURED: FormState = {
  status: "error",
  message: "This form isn't connected to an inbox yet, so nothing was sent.",
};

async function resend(path: string, body: unknown, method = "POST") {
  return fetch(`${RESEND}${path}`, {
    method,
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(10_000),
  });
}

/** Status and Resend's error type (e.g. "403 validation_error"), which point at setup problems without exposing sender data. */
async function describeFailure(res: Response) {
  const detail = (await res.json().catch(() => null)) as { name?: string } | null;
  return `Resend responded ${res.status}${detail?.name ? ` ${detail.name}` : ""}`;
}

/** Validates an enquiry against its definition and emails it to the site inbox. Bind `kind` before use. */
export async function submitEnquiry(kind: FormKind, _prev: FormState, data: FormData): Promise<FormState> {
  const form = forms[kind];
  if (!form) return { status: "error", message: "Unknown form." };

  // Validate first, so a person who submits too early still sees what's missing.
  const values: Record<string, string> = {};
  const errors: Record<string, string> = {};
  for (const field of form.fields) {
    const value = text(data, field.name);
    const error = fieldError(field, value);
    if (error) errors[field.name] = error;
    values[field.name] = value;
  }
  if (Object.keys(errors).length) {
    return { status: "error", message: "Check the highlighted fields and try again.", errors, values };
  }

  // Drop automated submissions while appearing to succeed.
  const automated = automatedReason(data);
  if (automated) {
    dropped(kind, automated);
    return form.successHref ? redirect(form.successHref) : { status: "success" };
  }
  if (await rateLimited()) return { ...RATE_LIMITED, values };

  const { RESEND_API_KEY, FORMS_TO_EMAIL, FORMS_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !FORMS_TO_EMAIL || !FORMS_FROM_EMAIL) return { ...NOT_CONFIGURED, values };

  const lines = form.fields
    .filter((f) => f.type !== "textarea" && values[f.name])
    .map((f) => `${f.label}: ${oneLine(values[f.name])}`);
  const long = form.fields.filter((f) => f.type === "textarea" && values[f.name]);
  const body = [
    ...lines,
    ...long.map((f) => `\n${f.label}:\n${values[f.name]}`),
    "\n--\nSent from the contact form on victorsonde.com. Reply to answer the sender directly.",
  ].join("\n");
  const topic = values.subject || values.discipline || values.organisation;

  try {
    const res = await resend("/emails", {
      from: FORMS_FROM_EMAIL,
      to: FORMS_TO_EMAIL.split(",").map((s) => s.trim()),
      reply_to: values.email,
      subject: oneLine(`${form.title}${topic ? `: ${topic}` : ""} from ${values.name}`).slice(0, 180),
      // Plain text only, so nothing a sender types can be interpreted as markup.
      text: body,
    });
    if (!res.ok) throw new Error(await describeFailure(res));
    const sent = (await res.json().catch(() => null)) as { id?: string } | null;
    console.info(`[forms] ${kind} sent via Resend (id ${sent?.id ?? "unknown"})`);
  } catch (error) {
    // Log the failure without any personal data.
    console.error(`[forms] ${kind} delivery failed:`, error instanceof Error ? error.message : "unknown error");
    return { status: "error", message: "Your message couldn't be sent. Try again in a few minutes.", values };
  }

  if (form.successHref) redirect(form.successHref);
  return { status: "success" };
}

/** Sends one plain-text email from the site address; throws with Resend's error on failure. */
async function sendEmail(to: string, subject: string, body: string) {
  const res = await resend("/emails", { from: process.env.FORMS_FROM_EMAIL, to: [to], subject, text: body });
  if (!res.ok) throw new Error(await describeFailure(res));
}

/**
 * First step of the double opt-in for cohort updates: emails a signed confirmation link. Nothing is
 * added to Resend until the link is used (see `confirmSubscription`).
 */
export async function subscribe(_prev: FormState, data: FormData): Promise<FormState> {
  const success: FormState = {
    status: "success",
    message: "Almost there. Check your inbox and click the link to confirm your subscription.",
  };
  const email = text(data, "email").toLowerCase();
  if (!isEmail(email) || email.length > 200) {
    return { status: "error", message: "Enter a valid email address.", errors: { email: "Enter a valid email address." } };
  }
  const automated = automatedReason(data);
  if (automated) {
    dropped("subscribe", automated);
    return success;
  }
  if (await rateLimited()) return RATE_LIMITED;

  const origin = siteUrl();
  if (!process.env.RESEND_API_KEY || !process.env.FORMS_FROM_EMAIL || !origin) return NOT_CONFIGURED;

  const link = `${origin}/subscribe/confirm?token=${createToken(email)}`;
  try {
    await sendEmail(
      email,
      "Confirm your subscription to Victor Sonde's cohort updates",
      [
        "Hi,",
        "",
        "Someone (hopefully you) asked to get cohort and launch updates from Victor Sonde: cohort dates, new simulations and Decision Intelligence Lab news.",
        "",
        "Confirm your subscription here:",
        link,
        "",
        "The link works for 7 days. If this wasn't you, ignore this email and you won't hear from us again.",
        "",
        "--\nVictor Sonde · victorsonde.com",
      ].join("\n"),
    );
  } catch (error) {
    console.error("[forms] subscribe confirmation failed:", error instanceof Error ? error.message : "unknown error");
    return { status: "error", message: "We couldn't send your confirmation email. Try again in a few minutes." };
  }
  return success;
}

/**
 * Second step of the double opt-in: adds the confirmed address to Resend contacts (and the segment,
 * when configured), then sends a welcome email. Bind `token` before use.
 */
export async function confirmSubscription(token: string): Promise<FormState> {
  const read = readToken(token);
  if ("error" in read) {
    return {
      status: "error",
      message: read.error === "expired" ? "This link has expired. Sign up again to get a new one." : "This link isn't valid.",
    };
  }
  const { email } = read;
  const segment = process.env.RESEND_SEGMENT_ID;

  try {
    const created = await resend("/contacts", {
      email,
      unsubscribed: false,
      ...(segment && { segments: [{ id: segment }] }),
    });
    if (!created.ok) {
      // Already a contact (perhaps unsubscribed earlier): resubscribe them, since they've just confirmed.
      const path = `/contacts/${encodeURIComponent(email)}`;
      const updated = await resend(path, { unsubscribed: false }, "PATCH");
      if (!updated.ok) throw new Error(await describeFailure(updated));
      if (segment) await resend(`${path}/segments/${segment}`, {});
    }
  } catch (error) {
    console.error("[forms] subscribe confirm failed:", error instanceof Error ? error.message : "unknown error");
    return { status: "error", message: "We couldn't confirm you just now. Try the link again in a few minutes." };
  }

  // The subscription stands even if the welcome email fails.
  await sendEmail(
    email,
    "You're on the list",
    [
      "Hi,",
      "",
      "Thanks for confirming. You're now on the list for cohort and launch updates from Victor Sonde.",
      "",
      "What to expect:",
      "• Founding Cohort dates and when applications open",
      "• New work simulations as they launch",
      "• News when the Decision Intelligence Lab opens",
      "",
      "Emails only go out when there's something worth sharing, and every update has an unsubscribe link.",
      "",
      `While you wait, explore the simulations: ${siteUrl()}/cohort`,
      "",
      "--\nVictor Sonde · victorsonde.com",
    ].join("\n"),
  ).catch((error) =>
    console.error("[forms] welcome email failed:", error instanceof Error ? error.message : "unknown error"),
  );

  return { status: "success" };
}
