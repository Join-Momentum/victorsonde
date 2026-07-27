import type { AboutContent } from "@/types/models";

/**
 * `/about` (02-sitemap.md §3.1). Headline and section order follow the
 * spec's suggested copy directly (same pattern as the homepage/DIL specs,
 * suggested copy pending Victor's voice approval, not invented). The
 * thesis paragraph and the "naming the five Builds in plain language"
 * supporting line are composed only from already-approved facts (the Build
 * names/definitions in content/builds.ts, the master/supporting
 * propositions in content/site.ts), no biographical claims beyond those.
 *
 * Sections explicitly omitted pending real content, per spec:
 * - Photo band: [MEDIA REQUIRED], no candid photography exists yet.
 * - Selected recognition: doc says omit entirely if none verified.
 * - Personal note: [VERIFIED CONTENT REQUIRED], left undefined below.
 * - Testimonial: renders nothing until content/testimonials.ts has an
 *   entry with permission: true (same rule as everywhere else).
 * Role proof lines are also left unset, see RoleEntry in types/models.ts.
 */
export const aboutContent: AboutContent = {
  seo: {
    title: "About Victor Sonde",
    metaDescription:
      "Victor Sonde is an entrepreneur, transformation leader and institution builder turning human potential into capability, evidence and opportunity. Meet the person behind the portfolio.",
  },
  hero: {
    headline: "Potential is everywhere. Proof, opportunity and institutions are not. I build all three.",
    supportingCopy:
      "Victor works across five builds, people, platforms, institutions, ideas and legacies, turning potential into capability, evidence, opportunity and lasting impact.",
    primaryCta: { ctaId: "cta.work" },
    secondaryCta: { ctaId: "cta.story", label: "Read Victor's Story", href: "/about/story" },
  },
  thesis: [
    "Potential is universal, but it rarely gets the chance to become anything more. The gap isn't ambition, it's the practice, evidence and pathways that turn ability into something the world can verify and act on.",
    "That's the arc this work follows: potential becomes capability through real practice, capability becomes evidence through verified proof, and evidence becomes opportunity when it reaches the people who can act on it.",
    "Held for long enough, that chain becomes impact, not a single programme or product, but institutions built to keep the cycle running after any one project ends.",
  ],
  roles: [
    { title: "Entrepreneur" },
    { title: "Transformation Leader" },
    { title: "Product Strategist" },
    { title: "Systems Thinker" },
    { title: "Philanthropist" },
    { title: "Speaker" },
    { title: "Writer" },
    { title: "Mentor" },
    { title: "Institution Builder" },
  ],
};
