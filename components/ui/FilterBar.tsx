"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { trackDynamic } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * Generic multi-select, URL-synced facet filter bar
 * (07-design-system.md §5.13: "archive filtering — facets[], url-sync;
 * listbox/checkbox semantics; result count live"). Reused across
 * Career Portfolio, and any future archive hub (Insights, Case Studies,
 * Videos) once they have enough content to need filtering.
 */
export interface Facet {
  key: string;
  label: string;
  options: { value: string; label: string }[];
}

interface FilterBarProps {
  facets: Facet[];
  resultCount: number;
}

export function FilterBar({ facets, resultCount }: FilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function toggle(facetKey: string, value: string) {
    const current = new Set(searchParams.getAll(facetKey));
    if (current.has(value)) {
      current.delete(value);
    } else {
      current.add(value);
    }
    const params = new URLSearchParams(searchParams.toString());
    params.delete(facetKey);
    for (const v of current) params.append(facetKey, v);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    trackDynamic("filter_change", { facet: facetKey, value });
  }

  return (
    <div>
      <div className="flex flex-wrap gap-6" role="group" aria-label="Filters">
        {facets.map((facet) => {
          const active = new Set(searchParams.getAll(facet.key));
          return (
            <fieldset key={facet.key}>
              <legend className="mb-2 text-xs font-semibold tracking-wide text-ink-muted uppercase">
                {facet.label}
              </legend>
              <div className="flex flex-wrap gap-2">
                {facet.options.map((opt) => {
                  const isActive = active.has(opt.value);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      role="checkbox"
                      aria-checked={isActive}
                      onClick={() => toggle(facet.key, opt.value)}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-sm transition-colors duration-(--dur-fast)",
                        isActive
                          ? "border-brand-primary bg-brand-primary-tint text-brand-dark"
                          : "border-border bg-surface text-ink hover:bg-bg-alt",
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-ink-muted" role="status" aria-live="polite">
        {resultCount} result{resultCount === 1 ? "" : "s"}
      </p>
    </div>
  );
}
