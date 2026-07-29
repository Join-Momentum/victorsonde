/**
 * §15 — one worked example walked through the journey. Marked clearly as
 * illustrative, not a past cohort result, until real cohort artefacts
 * exist (04-design-intelligence-lab.md §15).
 */
interface ChallengeShowcaseProps {
  prompt: string;
  label: string;
  trackName?: string;
}

export function ChallengeShowcase({ prompt, label, trackName }: ChallengeShowcaseProps) {
  return (
    <div className="rounded-lg border border-border bg-surface p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-brand-primary-tint px-3 py-1 text-xs font-semibold text-brand-dark uppercase">
          {label}
        </span>
        {trackName && <span className="text-xs font-semibold tracking-wide text-ink-muted uppercase">{trackName}</span>}
      </div>
      <p className="mt-4 max-w-2xl text-xl leading-snug font-medium text-ink">{prompt}</p>
    </div>
  );
}
