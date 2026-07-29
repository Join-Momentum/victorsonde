/** §17 — the feedback stack + rubric dimension names (weightings are per-cohort, not shown here). */
interface AssessmentFeedbackProps {
  stack: string[];
  rubricDimensions: string[];
  rubricNote?: string;
}

export function AssessmentFeedback({ stack, rubricDimensions, rubricNote }: AssessmentFeedbackProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <h3 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">The feedback stack</h3>
        <ul className="mt-4 flex flex-col gap-3">
          {stack.map((item) => (
            <li key={item} className="rounded-lg border border-border bg-surface p-4 text-sm text-ink">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Rubric dimensions</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {rubricDimensions.map((dimension) => (
            <li key={dimension} className="rounded-full border border-border bg-bg-alt px-3 py-1.5 text-sm text-ink">
              {dimension}
            </li>
          ))}
        </ul>
        {rubricNote && <p className="mt-4 text-sm text-ink-muted">{rubricNote}</p>}
      </div>
    </div>
  );
}
