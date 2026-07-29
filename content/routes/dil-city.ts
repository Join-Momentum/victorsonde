import type { LeadRoute } from "@/types/models";

/** DIL bring-to-my-city CTA (04-design-intelligence-lab.md §34). */
export const dilCityRoute: LeadRoute = {
  route: "dil-city",
  steps: [
    {
      id: "city",
      title: "Bring the Lab to my city",
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "organisation", label: "Organisation (optional)", type: "text", required: false },
        { name: "city", label: "City", type: "text", required: true },
        { name: "country", label: "Country", type: "text", required: true },
        { name: "role", label: "Your role in making this happen", type: "select", required: true },
        { name: "localPartnerDetails", label: "Potential local partners or venues (optional)", type: "textarea", required: false },
        { name: "whyThisCity", label: "Why this city?", type: "textarea", required: true },
        { name: "consent", label: "I consent to being contacted about this proposal", type: "checkbox", required: true },
      ],
    },
  ],
  pipeline: "DIL — City Partnerships",
  slaDays: 5,
  ackTemplate: "received-review-process",
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/dil-city",
};
