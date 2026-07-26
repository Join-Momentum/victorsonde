"use client";

import { Button } from "@/components/ui/Button";
import { getCta } from "@/content/ctas";
import { track } from "@/lib/analytics";

/**
 * Resolves a canonical CTA id from the registry (content/ctas.ts) and
 * fires `cta_click {ctaId, position}` on click (02-sitemap.md §1 baseline
 * analytics). Labels are reused verbatim — pass `label`/`href` only for
 * the documented exceptional overrides (01-strategy.md §4.3).
 */
interface CtaLinkProps {
  ctaId: string;
  position: string;
  label?: string;
  href?: string;
  variant?: "solid" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function CtaLink({ ctaId, position, label, href, variant, size, className }: CtaLinkProps) {
  const registryEntry = getCta(ctaId);
  const resolvedLabel = label ?? registryEntry?.label ?? ctaId;
  const resolvedHref = href ?? registryEntry?.href ?? "#";

  return (
    <Button
      href={resolvedHref}
      variant={variant}
      size={size}
      className={className}
      onClick={() => track("cta_click", { ctaId, position })}
    >
      {resolvedLabel}
    </Button>
  );
}
