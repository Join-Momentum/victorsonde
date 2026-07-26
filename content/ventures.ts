import type { Venture } from "@/types/models";

/**
 * The five ventures (01-strategy.md §2.3). oneLiners below are drawn
 * directly from the strategy doc's portfolio-structure descriptions —
 * full page copy still needs verification per venture page build.
 * Venture logos are [BRAND ASSET REQUIRED] except where noted.
 */
export const ventures: Venture[] = [
  {
    id: "join-momentum",
    name: "Join Momentum Inc",
    oneLiner:
      "Transformation and capability partner: product strategy, digital transformation, AI and emerging tech, defence and security, strategic communications, international capability development.",
    builds: ["build-institutions", "build-platforms"],
    href: "/ventures/join-momentum",
    status: "live",
  },
  {
    id: "career-bridge",
    name: "Career Bridge Foundation",
    oneLiner:
      "Workforce activation and social impact: evidence-based employability, portfolios, pathways to opportunity.",
    builds: ["build-people", "build-legacies"],
    href: "/ventures/career-bridge",
    status: "live",
  },
  {
    id: "evidentize",
    name: "Evidentize.IO",
    oneLiner:
      "AI-powered simulation, capability-evaluation and portfolio platform.",
    builds: ["build-platforms"],
    href: "/ventures/evidentize",
    status: "live",
  },
  {
    id: "design-intelligence-lab",
    name: "Design Intelligence Lab",
    oneLiner:
      "African youth-empowerment initiative (18–45): AI-powered simulation and portfolio experience across 13 problem domains.",
    builds: ["build-people", "build-legacies"],
    href: "/design-intelligence-lab",
    status: "live",
  },
  {
    id: "financial-resilience",
    name: "Financial Resilience & Protection",
    oneLiner:
      "Compliance-controlled introduction to protection and resilience work.",
    builds: ["build-legacies"],
    href: "/financial-resilience",
    // Ships as a holding state until compliance approvals exist —
    // see content/financial/disclosures.ts and 05-key-pages.md §4.
    status: "holding",
  },
];

export function getVenture(id: string): Venture | undefined {
  return ventures.find((v) => v.id === id);
}
