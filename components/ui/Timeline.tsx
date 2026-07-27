import type { TimelineEntry } from "@/types/models";
import { EmptyState } from "@/components/ui/EmptyState";

/**
 * Career/venture history timeline (07-design-system.md §5.13,
 * 05-key-pages.md §2). Spec calls for alternating entries on a sticky
 * year rail (desktop) vs a single column (mobile) — simplified here to
 * one responsive vertical-spine implementation so desktop/mobile can't
 * drift out of parity, consistent with JourneyDiagram/ImpactPortfolioMap.
 * Renders an EmptyState rather than nothing when there's no data, since
 * this is the primary content of its page (Career Portfolio) rather than
 * an optional section that can just disappear.
 */
interface TimelineProps {
  entries: TimelineEntry[];
  variant?: "condensed" | "full";
}

export function Timeline({ entries, variant = "full" }: TimelineProps) {
  if (entries.length === 0) {
    return (
      <EmptyState
        message="Career history is being verified and will be published here."
        actionLabel="Enquire about advisory"
        actionHref="/advisory"
      />
    );
  }

  const shown = variant === "condensed" ? entries.filter((e) => e.featured).slice(0, 6) : entries;

  return (
    <ol className="relative flex flex-col gap-8 border-l border-border pl-8">
      {shown.map((entry) => (
        <li key={entry.slug} className="relative">
          <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-brand-primary" aria-hidden="true" />
          <span className="font-utility text-sm text-brand-primary">
            {entry.yearStart}
            {entry.yearEnd ? `–${entry.yearEnd}` : ""}
          </span>
          <h3 className="mt-1 text-lg font-semibold text-ink">{entry.title}</h3>
          <p className="text-sm text-ink-muted">
            {entry.organisation}
            {entry.country ? ` — ${entry.country}` : ""}
          </p>
          <p className="mt-2 max-w-prose text-ink opacity-80">{entry.summary}</p>
        </li>
      ))}
    </ol>
  );
}
