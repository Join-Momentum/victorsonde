"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { track } from "@/lib/analytics";
import type { Build, Venture } from "@/types/models";

/**
 * The full-size Impact Portfolio Map (07-design-system.md §5.4) —
 * data-driven from Build/Venture docs, zero hard-coding. Node↔venture
 * relationships come directly from `venture.builds[]`, not a separate
 * connections file (see PortfolioContent.connections in types/models.ts,
 * which is only for the editorial narrative section).
 *
 * Simplified from the full spec in one deliberate way: selection is
 * Build-driven only (click a Build, see its ventures) rather than the
 * fully bidirectional node graph with animated SVG connector lines the
 * spec describes — that's a real visual enhancement worth doing once
 * there's a reason to invest in it, not required to meet the stated
 * acceptance bar ("a screen-reader user can retrieve every relationship
 * the visual expresses... no interaction required to understand the
 * top-level structure"), which this list+panel structure already meets
 * natively. Desktop/mobile share one implementation (responsive CSS
 * reflow) so information parity isn't something to maintain by hand.
 */
interface ImpactPortfolioMapProps {
  builds: Build[];
  ventures: Venture[];
}

export function ImpactPortfolioMap({ builds, ventures }: ImpactPortfolioMapProps) {
  const [selectedId, setSelectedId] = useState(builds[0]?.id);
  const selected = builds.find((b) => b.id === selectedId) ?? builds[0];
  const connectedVentures = selected ? ventures.filter((v) => v.builds.includes(selected.id)) : [];

  if (!selected) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <ol className="flex flex-col gap-2">
        {builds.map((build) => {
          const isSelected = build.id === selected.id;
          return (
            <li key={build.id}>
              <button
                type="button"
                aria-pressed={isSelected}
                aria-controls="portfolio-map-panel"
                onClick={() => {
                  setSelectedId(build.id);
                  track("cta_click", { ctaId: `portfolio-map.${build.id}`, position: "portfolio-map" });
                }}
                className={cn(
                  "w-full rounded-lg border px-5 py-4 text-left transition-colors duration-(--dur-fast)",
                  isSelected
                    ? "border-brand-primary bg-brand-primary-tint"
                    : "border-border bg-surface hover:bg-bg-alt",
                )}
              >
                <span className="block text-base font-semibold text-ink">{build.name}</span>
                <span className="mt-1 block text-sm text-ink-muted">{build.definition}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <div
        id="portfolio-map-panel"
        role="region"
        aria-live="polite"
        aria-label={`${selected.name} — connected ventures`}
        className="rounded-lg border border-border bg-bg-alt p-6 sm:p-8"
      >
        <h3 className="text-xl font-semibold text-ink">{selected.name}</h3>
        <p className="mt-2 max-w-prose text-ink-muted">{selected.definition}</p>

        <h4 className="mt-6 text-sm font-semibold tracking-wide text-ink-muted uppercase">
          Where this shows up
        </h4>
        {connectedVentures.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-3">
            {connectedVentures.map((venture) => (
              <li key={venture.id}>
                <Link
                  href={venture.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink hover:border-brand-primary hover:text-brand-primary"
                >
                  {venture.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-ink-muted">{selected.primaryExpressions.join(", ")}</p>
        )}
      </div>
    </div>
  );
}
