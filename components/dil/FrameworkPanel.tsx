import type { DilFrameworkPanel } from "@/types/models";

/**
 * §6–9 — one of the 4 capability frameworks (04-design-intelligence-lab.md).
 * `applicationLine`/`microExample` are optional per DilFrameworkPanel — no
 * spec-given copy exists for them yet, so the panel just omits those lines
 * rather than showing an empty affordance.
 */
interface FrameworkPanelProps {
  framework: DilFrameworkPanel;
}

export function FrameworkPanel({ framework }: FrameworkPanelProps) {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <h3 className="text-lg font-semibold text-ink">{framework.name}</h3>
      {/* Chips wrap independently at narrow widths — no inter-chip arrow
          glyphs, which would otherwise orphan at the wrap point. */}
      <ol className="mt-4 flex flex-wrap gap-2">
        {framework.stages.map((stage) => (
          <li key={stage} className="rounded-full border border-border bg-bg-alt px-3 py-1 text-xs font-medium text-ink">
            {stage}
          </li>
        ))}
      </ol>
      {framework.applicationLine && <p className="mt-4 text-sm text-ink-muted">{framework.applicationLine}</p>}
      {framework.microExample && <p className="mt-2 text-sm text-ink-muted italic">{framework.microExample}</p>}
    </div>
  );
}
