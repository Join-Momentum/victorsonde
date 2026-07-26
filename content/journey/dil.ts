import type { JourneyStage } from "@/types/models";

/**
 * DIL's 11-stop programme journey — the signature JourneyDiagram instance
 * (04-design-intelligence-lab.md §14). Stage order/title/phase are fixed
 * by spec; whatYouDo/whatYouProduce/whoInvolved/artefactExample are
 * written per stage as programme detail is confirmed.
 */
export const dilJourney: JourneyStage[] = [
  { order: 1, title: "Problem", phase: "Understand" },
  { order: 2, title: "Research", phase: "Understand" },
  { order: 3, title: "Systems Mapping", phase: "Understand" },
  { order: 4, title: "Reframing", phase: "Understand" },
  { order: 5, title: "Ideation", phase: "Create" },
  { order: 6, title: "Simulation", phase: "Create" },
  { order: 7, title: "Experimentation", phase: "Create" },
  { order: 8, title: "Feedback", phase: "Create" },
  { order: 9, title: "Evidence", phase: "Prove" },
  { order: 10, title: "Portfolio", phase: "Prove" },
  { order: 11, title: "Opportunity", phase: "Prove" },
];
