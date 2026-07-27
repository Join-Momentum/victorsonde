import type { LeadRoute } from "@/types/models";
import { dilParticipantWaitlist } from "./dil-participant-waitlist";
import { dilParticipantApplication } from "./dil-participant-application";
import { speakingRoute } from "./speaking";
import { joinMomentumRoute } from "./join-momentum";
import { cbTalentRoute } from "./cb-talent";
import { cbEmployerRoute } from "./cb-employer";
import { demoRoute } from "./demo";
import { advisoryRoute } from "./advisory";
import { generalRoute } from "./general";

/** Registry of every LeadRoute, keyed by `route` — used by the API route handler and EnquiryWizard. */
export const leadRoutes: Record<string, LeadRoute> = Object.fromEntries(
  [
    dilParticipantWaitlist,
    dilParticipantApplication,
    speakingRoute,
    joinMomentumRoute,
    cbTalentRoute,
    cbEmployerRoute,
    demoRoute,
    advisoryRoute,
    generalRoute,
  ].map((route) => [route.route, route]),
);

export function getLeadRoute(name: string): LeadRoute | undefined {
  return leadRoutes[name];
}

/**
 * Strips `pipeline` before a route is passed as a prop into the client
 * <EnquiryWizard> — functions (used by routes like demoRoute/
 * joinMomentumRoute whose pipeline depends on submitted data) can't cross
 * the Server→Client Component boundary, and the client doesn't need
 * `pipeline` anyway since it's resolved server-side in
 * app/api/contact/route.ts.
 */
export function toClientRoute(route: LeadRoute) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- destructured only to exclude from `clientRoute`
  const { pipeline: _pipeline, ...clientRoute } = route;
  return clientRoute;
}
