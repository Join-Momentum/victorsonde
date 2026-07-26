import type { JourneyStage } from "@/types/models";

/**
 * The master arc — potential → capability → evidence → opportunity →
 * impact (01-strategy.md §2.1 supporting proposition; also the spine of
 * the About thesis and DIL's problem framing). Used on /portfolio §3
 * "the flow model," reusing the JourneyDiagram family per
 * 02-sitemap.md §3.3.
 */
export const mainArc: JourneyStage[] = [
  { order: 1, title: "Potential" },
  { order: 2, title: "Capability" },
  { order: 3, title: "Evidence" },
  { order: 4, title: "Opportunity" },
  { order: 5, title: "Impact" },
];
