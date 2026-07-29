import type { DilSponsorTier } from "@/types/models";

/**
 * §24 — sponsorship tiers. Package benefits/pricing are
 * [VERIFIED CONTENT REQUIRED] in spec, so each tier shows only its name
 * plus an honest "available on request" note rather than an invented
 * benefits list. Capped at 2 columns (not a wider grid) because this
 * renders inside the narrower "Get involved" card, not full page width.
 */
interface SponsorTiersProps {
  tiers: DilSponsorTier[];
}

export function SponsorTiers({ tiers }: SponsorTiersProps) {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {tiers.map((tier) => (
        <li key={tier.name} className="rounded-lg border border-border bg-bg-alt p-3">
          <p className="text-sm font-semibold text-ink">{tier.name}</p>
          <p className="mt-1 text-xs text-ink-muted">{tier.description ?? "Available on request"}</p>
        </li>
      ))}
    </ul>
  );
}
