import type { LeadRoute } from "@/types/models";

/** DIL sponsor CTA (04-design-intelligence-lab.md §31). */
export const dilSponsorRoute: LeadRoute = {
  route: "dil-sponsor",
  steps: [
    {
      id: "sponsor",
      title: "Sponsor a cohort",
      fields: [
        { name: "organisation", label: "Organisation", type: "text", required: true },
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "interest", label: "What are you interested in sponsoring?", type: "textarea", required: true },
        { name: "budgetBand", label: "Budget band (optional)", type: "select", required: false },
        { name: "consent", label: "I consent to being contacted about this enquiry", type: "checkbox", required: true },
      ],
    },
  ],
  pipeline: "DIL — Sponsors",
  slaDays: 2,
  ackTemplate: "sponsor-pack-intro",
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/dil-sponsor",
};
