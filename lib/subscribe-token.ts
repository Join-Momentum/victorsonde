import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Signed, expiring confirmation links for the cohort-updates list (double opt-in). Nothing is
 * stored before confirmation: the email address travels inside the token, and the signature
 * proves it came from a confirmation email we sent. Server-only.
 */

const TTL_MS = 7 * 24 * 60 * 60 * 1000;

/** Signing key derived from the Resend key, so no extra secret is needed. Rotating that key voids pending links. */
function key() {
  const secret = process.env.RESEND_API_KEY;
  if (!secret) throw new Error("RESEND_API_KEY is not set");
  return createHmac("sha256", secret).update("vs-subscribe-confirm").digest();
}

const sign = (payload: string) => createHmac("sha256", key()).update(payload).digest("base64url");

export function createToken(email: string) {
  const payload = `${Buffer.from(email).toString("base64url")}.${Date.now() + TTL_MS}`;
  return `${payload}.${sign(payload)}`;
}

/** The email address a token was issued for, or why it can't be used. */
export function readToken(token: string): { email: string } | { error: "invalid" | "expired" } {
  const [encoded, expires, signature] = token.split(".");
  if (!encoded || !expires || !signature) return { error: "invalid" };
  const expected = Buffer.from(sign(`${encoded}.${expires}`));
  const given = Buffer.from(signature);
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return { error: "invalid" };
  if (Date.now() > Number(expires)) return { error: "expired" };
  return { email: Buffer.from(encoded, "base64url").toString() };
}

/** Public origin for links in emails. Never taken from request headers, which a sender controls. */
export function siteUrl() {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.NODE_ENV !== "production") return "http://localhost:3000";
}
