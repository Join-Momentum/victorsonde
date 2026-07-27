import Link from "next/link";
import type { CaseStudy } from "@/types/models";

/** 07-design-system.md §5.13 — outcome line is verified-only by construction (outcomeVerified gate). */
export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const headline = caseStudy.outcomeMetrics[0];
  return (
    <article className="group relative flex flex-col gap-2 rounded-lg border border-border bg-surface p-6">
      {caseStudy.sector && <span className="text-xs font-semibold tracking-wide text-brand-primary uppercase">{caseStudy.sector}</span>}
      <h3 className="text-lg font-semibold text-ink">
        <Link href={`/case-studies/${caseStudy.slug}`} className="after:absolute after:inset-0">
          {caseStudy.title}
        </Link>
      </h3>
      <p className="text-sm text-ink-muted">{caseStudy.clientContext}</p>
      {headline && (
        <p className="text-sm font-medium text-ink">
          {headline.value}
          {headline.unit} {headline.label}
        </p>
      )}
    </article>
  );
}
