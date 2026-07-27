import type { CaseStudy } from "@/types/models";

/**
 * Placeholder in-memory case study list — mirrors content/insights.ts:
 * the real MDX pipeline (content/case-studies/*.mdx) isn't wired yet.
 * `outcomeVerified: true` is a hard publish gate per
 * 06-content-media.md §4.8 — enforced in scripts/validate-content.ts
 * once entries exist, not just a naming convention.
 */
export const caseStudies: CaseStudy[] = [];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
