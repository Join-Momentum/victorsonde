import Link from "next/link";
import type { Venture } from "@/types/models";
import { getBuild } from "@/content/builds";

/**
 * The remaining ventures as hairline-divided rows rather than a bordered
 * card grid — "not card-soup" (07-design-system.md §3.1 rule 1). Each row
 * is a single named link (whole-row hit target via the stretched-link
 * pattern also used in VentureCard).
 */
interface VentureListProps {
  ventures: Venture[];
}

export function VentureList({ ventures }: VentureListProps) {
  return (
    <ul className="divide-y divide-border border-t border-border">
      {ventures.map((venture) => (
        <li key={venture.id} className="group relative">
          <Link
            href={venture.href}
            className="flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-8"
          >
            <div className="flex items-baseline gap-4 sm:w-1/3">
              <h3 className="text-xl font-semibold text-ink group-hover:text-brand-primary">{venture.name}</h3>
              {venture.status === "holding" && (
                <span className="shrink-0 rounded-full bg-brand-primary-tint px-2.5 py-0.5 text-xs font-medium text-brand-dark">
                  Coming soon
                </span>
              )}
            </div>
            <p className="text-sm text-ink-muted sm:w-1/2">{venture.oneLiner}</p>
            <div className="flex items-center gap-3 sm:w-auto">
              {venture.builds.map((id) => {
                const build = getBuild(id);
                return build ? (
                  <span key={id} className="hidden text-xs text-ink-muted lg:inline">
                    {build.name}
                  </span>
                ) : null;
              })}
              <span className="text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-primary" aria-hidden="true">
                →
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
