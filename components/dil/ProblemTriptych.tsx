import type { ProblemGap } from "@/types/models";

/** §3 — the proof gap / practice gap / pathway gap (04-design-intelligence-lab.md). */
interface ProblemTriptychProps {
  gaps: ProblemGap[];
}

export function ProblemTriptych({ gaps }: ProblemTriptychProps) {
  return (
    <ol className="grid gap-6 sm:grid-cols-3">
      {gaps.map((gap) => (
        <li key={gap.title} className="rounded-lg border border-border bg-surface p-6">
          <h3 className="text-lg font-semibold text-ink">{gap.title}</h3>
          <p className="mt-2 text-sm text-ink-muted">{gap.body}</p>
        </li>
      ))}
    </ol>
  );
}
