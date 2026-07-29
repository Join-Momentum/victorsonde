/**
 * §16 — what a participant leaves with. Real portfolio screenshots are
 * [MEDIA REQUIRED] until a first cohort exists, so this renders the output
 * types as a labelled list rather than a mocked-up screenshot.
 */
interface OutputGridProps {
  outputs: string[];
}

export function OutputGrid({ outputs }: OutputGridProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {outputs.map((output) => (
        <li key={output} className="rounded-lg border border-border bg-surface p-4 text-sm font-medium text-ink">
          {output}
        </li>
      ))}
    </ul>
  );
}
