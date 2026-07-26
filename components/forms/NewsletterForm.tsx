"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

/**
 * 07-design-system.md §5.13. Name optional, email required, unticked
 * consent, inline success state. Submission currently only validates and
 * shows a local success state — the real POST to a provider (Brevo/
 * ConvertKit, DEVELOPER DECISION REQUIRED per 08-technical.md §1) and the
 * `newsletter_signup {context}` analytics event get wired together once
 * that provider is chosen and /api/newsletter exists.
 */
interface NewsletterFormProps {
  context: string;
  className?: string;
}

export function NewsletterForm({ context, className }: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    if (typeof email !== "string" || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // TODO: POST to /api/newsletter once the provider adapter exists.
    setStatus("success");
  }

  if (status === "success") {
    return (
      <p className={className} role="status">
        Thanks — check your inbox to confirm your subscription.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className} data-context={context} noValidate>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor={`newsletter-email-${context}`} className="text-sm font-medium text-ink">
            Get the newsletter
          </label>
          <input
            id={`newsletter-email-${context}`}
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-2 h-11 w-full rounded-md border border-border bg-surface px-4 text-sm text-ink"
            aria-describedby={status === "error" ? `newsletter-error-${context}` : undefined}
            aria-invalid={status === "error" || undefined}
          />
        </div>
        <Button type="submit">Subscribe</Button>
      </div>
      {status === "error" && (
        <p id={`newsletter-error-${context}`} className="mt-2 text-sm text-error">
          Enter a valid email address.
        </p>
      )}
      <p className="mt-2 text-xs text-ink-muted">
        By subscribing you consent to receive email updates. Unsubscribe anytime.
      </p>
    </form>
  );
}
