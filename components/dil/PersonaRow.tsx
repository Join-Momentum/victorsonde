import type { DilPersona } from "@/types/models";

/**
 * §10 — "Who it's for." A persona only shows a "you'll fit if…" line once
 * `fitLine` actually has one (same no-fake-affordance rule as
 * components/ui/JourneyDiagram.tsx) — until then the category name alone
 * is honest, useful information. Capped at 2 columns (not wider) because
 * this sits beside the eligibility list in a narrower 2fr layout column
 * on desktop, not full page width.
 */
interface PersonaRowProps {
  personas: DilPersona[];
}

export function PersonaRow({ personas }: PersonaRowProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {personas.map((persona) => (
        <li key={persona.title} className="rounded-lg border border-border bg-surface p-5">
          <p className="font-semibold text-ink">{persona.title}</p>
          {persona.fitLine && <p className="mt-2 text-sm text-ink-muted">{persona.fitLine}</p>}
        </li>
      ))}
    </ul>
  );
}
