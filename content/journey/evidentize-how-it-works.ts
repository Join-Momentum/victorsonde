import type { JourneyStage } from "@/types/models";

/** How Evidentize works — 5 steps (05-key-pages.md §1.3 item 4). */
export const evidentizeHowItWorks: JourneyStage[] = [
  { order: 1, title: "Scenario-based simulations" },
  { order: 2, title: "AI-supported feedback" },
  { order: 3, title: "Expert review" },
  { order: 4, title: "Evidence & verification" },
  { order: 5, title: "Digital portfolio" },
];
