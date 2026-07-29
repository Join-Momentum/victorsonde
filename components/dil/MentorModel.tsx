import Link from "next/link";
import { CtaLink } from "@/components/ui/CtaLink";

/** §19 — mentor vs reviewer roles, vetting note, safeguarding link, CTA. */
interface MentorModelProps {
  mentorRole: string;
  reviewerRole: string;
  vettingNote: string;
}

export function MentorModel({ mentorRole, reviewerRole, vettingNote }: MentorModelProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface p-5">
          <h3 className="font-semibold text-ink">Mentor</h3>
          <p className="mt-2 text-sm text-ink-muted">{mentorRole}</p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-5">
          <h3 className="font-semibold text-ink">Reviewer</h3>
          <p className="mt-2 text-sm text-ink-muted">{reviewerRole}</p>
        </div>
      </div>
      <p className="text-sm text-ink-muted">
        {vettingNote}{" "}
        <Link href="/legal/safeguarding" className="font-medium text-brand-primary hover:underline">
          Read our safeguarding policy
        </Link>
        .
      </p>
      <div>
        <CtaLink ctaId="cta.dil.mentor" position="dil-mentor-model" variant="ghost" />
      </div>
    </div>
  );
}
