import type { StoryContent } from "@/types/models";

/**
 * `/about/story` (02-sitemap.md §3.2). The origin chapter, turning points
 * and "why Africa, why now" sections are all explicitly
 * [VERIFIED CONTENT REQUIRED: full narrative supplied by Victor — do not
 * invent biography] in the source doc — chapters/moments/photoEssay stay
 * empty here on purpose. Per the doc's own empty-state rule ("if film
 * absent, hero falls back to still + no Watch CTA"), the hero has no
 * primaryCta while there's no film.
 */
export const storyContent: StoryContent = {
  seo: {
    title: "Victor's Story",
    metaDescription:
      "The personal story behind Victor Sonde's work — how potential, proof and institution-building became one mission.",
  },
  hero: {
    headline: "The story behind the mission.",
    secondaryCta: { ctaId: "cta.news" },
  },
  chapters: [],
  moments: [],
  photoEssay: [],
};
