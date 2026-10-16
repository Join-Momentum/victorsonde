"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { fieldError, forms, isEmail, type FormKind, type FormState } from "./forms";

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

/** True for submissions that look automated: the hidden field is filled, or the form was sent implausibly fast. */
function looksAutomated(data: FormData): boolean {
  const startedAt = Number(data.get("startedAt"));
  return Boolean(data.get("website")) || !startedAt || Date.now() - startedAt < 2500;
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

async function resend(path: string, body: unknown) {
  return fetch(`${RESEND}${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(10_000),
  });
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
  if (looksAutomated(data)) return form.successHref ? redirect(form.successHref) : { status: "success" };
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
    "\n—\nSent from the contact form on victorsonde.com. Reply to answer the sender directly.",
  ].join("\n");
  const topic = values.subject || values.discipline || values.organisation;

  try {
    const res = await resend("/emails", {
      from: FORMS_FROM_EMAIL,
      to: FORMS_TO_EMAIL.split(",").map((s) => s.trim()),
      reply_to: values.email,
      subject: oneLine(`${form.title}${topic ? `: ${topic}` : ""} — ${values.name}`).slice(0, 180),
      // Plain text only, so nothing a sender types can be interpreted as markup.
      text: body,
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  } catch (error) {
    // Log the failure without any personal data.
    console.error(`[forms] ${kind} delivery failed:`, error instanceof Error ? error.message : "unknown error");
    return { status: "error", message: "Your message couldn't be sent. Try again in a few minutes.", values };
  }

  if (form.successHref) redirect(form.successHref);
  return { status: "success" };
}

/** Adds an email address to the Resend contacts list (and segment, when configured) for cohort updates. */
export async function subscribe(_prev: FormState, data: FormData): Promise<FormState> {
  const success: FormState = { status: "success", message: "You're on the list. We'll be in touch when there's news." };
  const email = text(data, "email").toLowerCase();
  if (!isEmail(email) || email.length > 200) {
    return { status: "error", message: "Enter a valid email address.", errors: { email: "Enter a valid email address." } };
  }
  if (looksAutomated(data)) return success;
  if (await rateLimited()) return RATE_LIMITED;

  const { RESEND_API_KEY, RESEND_SEGMENT_ID } = process.env;
  if (!RESEND_API_KEY) return NOT_CONFIGURED;

  try {
    const res = await resend("/contacts", {
      email,
      unsubscribed: false,
      ...(RESEND_SEGMENT_ID && { segments: [{ id: RESEND_SEGMENT_ID }] }),
    });
    // An address that is already a contact is still a successful sign-up from the visitor's side.
    if (!res.ok && res.status !== 409) throw new Error(`Resend responded ${res.status}`);
  } catch (error) {
    console.error("[forms] subscribe failed:", error instanceof Error ? error.message : "unknown error");
    return { status: "error", message: "We couldn't add you just now. Try again in a few minutes." };
  }
  return success;
}
