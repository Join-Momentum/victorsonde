import type { CareerJourneyContent } from "@/types/models";

/**
 * `/about/career` (02-sitemap.md §2 row 4). Tier 2, lightly specified —
 * "Chronological professional narrative," conversion event
 * `advisory_enquiry`. No section-by-section spec exists for this page
 * (unlike Career Portfolio at /portfolio/career, which has a full spec in
 * 05-key-pages.md §2) — this stays intentionally minimal until one does.
 * No specific durations/dates/employers are asserted here — those are
 * [VERIFIED CONTENT REQUIRED] and belong on the Career Portfolio timeline
 * once content/timeline.ts has real entries.
 */
export const careerJourneyContent: CareerJourneyContent = {
  seo: {
    title: "Career Journey — Victor Sonde",
    metaDescription:
      "A chronological view of Victor Sonde's professional career — roles, sectors and the throughline connecting them.",
  },
  hero: {
    headline: "A career built one build at a time.",
    primaryCta: { ctaId: "cta.advisory" },
  },
  intro:
    "This page traces the professional path in chronological order. The full evidence-backed record — roles, capabilities, artefacts and filters by sector, country and Build — lives on the Career Portfolio.",
};
