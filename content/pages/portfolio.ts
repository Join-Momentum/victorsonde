import type { AudienceRoute, PortfolioContent } from "@/types/models";

/**
 * `/portfolio` (02-sitemap.md §3.3). Headline/CTAs follow the doc's
 * suggested copy directly. `connections` (the "how the ventures reinforce
 * each other" narratives) stays empty — [VERIFIED CONTENT REQUIRED:
 * confirm actual operational relationships between ventures before
 * publishing connective claims], per 01-strategy.md §2.4.
 */
export const portfolioContent: PortfolioContent = {
  seo: {
    title: "Impact Portfolio — The Five Builds",
    metaDescription:
      "One portfolio, five builds: how Victor Sonde's ventures, programmes and ideas connect into a single system for transformative impact.",
  },
  hero: {
    headline: "One system. Five builds.",
    supportingCopy: "Building people, platforms and institutions for transformative impact.",
    primaryCta: { ctaId: "cta.portfolio.map", label: "Explore the map", href: "#map" },
    secondaryCta: { ctaId: "cta.ventures", label: "Meet the ventures", href: "/ventures" },
  },
  connections: [],
};

/** The doc calls for a 4-route fund/partner/hire/apply router (§3.3 step 7). */
export const portfolioAudienceRoutes: AudienceRoute[] = [
  {
    label: "Fund or sponsor impact",
    description: "Back the Design Intelligence Lab or Career Bridge Foundation's work.",
    ctaId: "cta.dil.sponsor",
  },
  {
    label: "Partner on transformation",
    description: "Bring Join Momentum in for a capability, product or transformation programme.",
    ctaId: "cta.jm",
  },
  {
    label: "Hire proven talent",
    description: "Evaluate candidates through Evidentize's verified capability evidence.",
    ctaId: "cta.demo",
  },
  {
    label: "Apply to the Lab",
    description: "Join the Design Intelligence Lab waitlist as a participant.",
    ctaId: "cta.dil.waitlist",
  },
];
