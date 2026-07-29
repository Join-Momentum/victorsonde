import type { LeadRoute } from "@/types/models";

/** DIL submit-a-challenge CTA (04-design-intelligence-lab.md §32). */
export const dilChallengeRoute: LeadRoute = {
  route: "dil-challenge",
  steps: [
    {
      id: "challenge",
      title: "Submit a challenge",
      fields: [
        { name: "organisation", label: "Organisation / institution", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "sector", label: "Sector", type: "text", required: true },
        { name: "challengeSummary", label: "Challenge summary", type: "textarea", required: true, maxLength: 1400, helpText: "≤200 words" },
        { name: "beneficiaries", label: "Who benefits if this is solved?", type: "textarea", required: false },
        { name: "confidential", label: "This challenge is confidential", type: "checkbox", required: false },
        { name: "consent", label: "I consent to being contacted about this challenge", type: "checkbox", required: true },
      ],
    },
  ],
  pipeline: "DIL — Challenges",
  slaDays: 5,
  ackTemplate: "received-review-process",
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/dil-challenge",
};
