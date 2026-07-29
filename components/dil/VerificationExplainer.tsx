/** §18 — what "verified" means, and explicitly what it isn't (never imply accreditation). */
interface VerificationExplainerProps {
  body: string;
  nonAccreditationNote: string;
}

export function VerificationExplainer({ body, nonAccreditationNote }: VerificationExplainerProps) {
  return (
    <div className="max-w-2xl rounded-lg border border-border bg-surface p-6">
      <p className="text-base text-ink">{body}</p>
      <p className="mt-4 border-t border-border pt-4 text-sm text-ink-muted">{nonAccreditationNote}</p>
    </div>
  );
}
