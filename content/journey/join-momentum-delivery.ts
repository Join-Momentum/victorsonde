import type { JourneyStage } from "@/types/models";

/** Join Momentum's delivery model — 4-stop (05-key-pages.md §1.1). */
export const joinMomentumDelivery: JourneyStage[] = [
  { order: 1, title: "Diagnose" },
  { order: 2, title: "Design" },
  { order: 3, title: "Deliver" },
  { order: 4, title: "Embed" },
];
