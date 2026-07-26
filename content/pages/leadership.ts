import type { LeadershipContent } from "@/types/models";

/**
 * `/about/leadership` (02-sitemap.md §2 row 5). Tier 2, lightly specified —
 * "Operating principles & frameworks preview," conversion CTA
 * `cta.advisory`. No section-by-section spec exists for this page in the
 * source docs — `principles` stays empty rather than inventing specific
 * operating principles that haven't been supplied/approved.
 */
export const leadershipContent: LeadershipContent = {
  seo: {
    title: "Leadership Philosophy",
    metaDescription:
      "The operating principles behind Victor Sonde's approach to transformation, product and institution-building leadership.",
  },
  hero: {
    headline: "How the work gets done.",
    primaryCta: { ctaId: "cta.advisory" },
  },
  intro:
    "The frameworks and operating principles that guide this work are gathered here as they're written up — start with the Insights hub for published frameworks in the meantime.",
  principles: [],
};
