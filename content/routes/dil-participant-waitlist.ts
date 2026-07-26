import type { LeadRoute } from "@/types/models";

/**
 * DIL application route, `announce` programmeState (04-design-intelligence-lab.md
 * §30). Once programmeState flips to `applications_open`, the page swaps to
 * dil-participant-application.ts instead — this file only covers the
 * waitlist-only state.
 */
export const dilParticipantWaitlist: LeadRoute = {
  route: "dil-participant-waitlist",
  steps: [
    {
      id: "waitlist",
      title: "Join the waitlist",
      fields: [
        { name: "name", label: "Full name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "country", label: "Country", type: "text", required: true },
        { name: "city", label: "City", type: "text", required: false },
        { name: "trackInterest", label: "Track interest", type: "select", required: false },
        {
          name: "consentProcessing",
          label: "I consent to my details being processed for this waitlist",
          type: "checkbox",
          required: true,
        },
      ],
    },
  ],
  pipeline: "DIL — Participants",
  slaDays: 5,
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/dil",
};
