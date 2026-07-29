import type { DilInvolvementCopy } from "@/types/models";
import { CtaLink } from "@/components/ui/CtaLink";

/** §21–23 — employer / government / university involvement (04-design-intelligence-lab.md). */
interface InvolvementCardProps {
  copy: DilInvolvementCopy;
  position: string;
}

export function InvolvementCard({ copy, position }: InvolvementCardProps) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <h3 className="text-lg font-semibold text-ink">{copy.heading}</h3>
      <p className="mt-2 text-sm text-ink-muted">{copy.body}</p>
      {copy.waysIn && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {copy.waysIn.map((way) => (
            <li key={way} className="rounded-full border border-border bg-bg-alt px-3 py-1 text-xs text-ink">
              {way}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-5">
        <CtaLink ctaId={copy.ctaId} label={copy.ctaLabel} href={copy.ctaHref} position={position} variant="ghost" size="sm" />
      </div>
    </div>
  );
}
