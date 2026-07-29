import type { DilEligibilityItem } from "@/types/models";

/**
 * §11 — plain list, no gatekeeping tone. Items without a `detail` (e.g.
 * diaspora policy, language level — [VERIFIED CONTENT REQUIRED] in spec)
 * still surface the category, with an honest note instead of an invented
 * threshold. Label/detail stack vertically below `sm` — some detail
 * strings (e.g. the connectivity requirement) are long enough that a
 * side-by-side `justify-between` layout would squeeze badly at 360px.
 */
interface EligibilityChecklistProps {
  items: DilEligibilityItem[];
}

export function EligibilityChecklist({ items }: EligibilityChecklistProps) {
  return (
    <ul className="flex flex-col divide-y divide-border border-t border-b border-border">
      {items.map((item) => (
        <li key={item.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <span className="font-medium text-ink">{item.label}</span>
          <span className="text-sm text-ink-muted sm:text-right">
            {item.detail ?? "Confirmed closer to cohort launch"}
          </span>
        </li>
      ))}
    </ul>
  );
}
