import type { SpeakingTopic } from "@/types/models";

/**
 * The 12 signature speaking topics (05-key-pages.md §3.4). Titles are
 * fixed by spec; onePromise/audienceTakeaways/formats are written per
 * topic as content comes in — left undefined rather than invented.
 */
export const topics: SpeakingTopic[] = [
  { slug: "future-of-evidence-based-employability", title: "The Future of Evidence-Based Employability" },
  { slug: "capability-proven-not-claimed", title: "Why Capability Must Be Proven, Not Claimed" },
  { slug: "africas-next-generation-problem-solvers", title: "Building Africa's Next Generation of Problem Solvers" },
  { slug: "certifications-to-demonstrable-capability", title: "From Certifications to Demonstrable Capability" },
  { slug: "designing-organisations-ai-powered-future", title: "Designing Organisations for an AI-Powered Future" },
  { slug: "systems-thinking-for-transformative-leaders", title: "Systems Thinking for Transformative Leaders" },
  { slug: "portfolio-careers-future-of-work", title: "Portfolio Careers and the Future of Work" },
  { slug: "potential-into-economic-opportunity", title: "Turning Human Potential into Economic Opportunity" },
  { slug: "building-transformative-institutions", title: "Building Transformative Institutions" },
  { slug: "ai-evidence-new-talent-economy", title: "AI, Evidence and the New Talent Economy" },
  { slug: "product-leadership-complex-organisations", title: "Product Leadership in Complex Organisations" },
  { slug: "design-intelligence-for-african-innovation", title: "Design Intelligence for African Innovation" },
];

export function getTopic(slug: string): SpeakingTopic | undefined {
  return topics.find((t) => t.slug === slug);
}
