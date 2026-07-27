import type { LeadRoute } from "@/types/models";

/** Advisory enquiry (09-seo-analytics-crm.md §3.2: role, challenge, timescale, budget). */
export const advisoryRoute: LeadRoute = {
  route: "advisory",
  steps: [
    {
      id: "advisory",
      title: "Enquire about advisory",
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "company", label: "Company", type: "text", required: false },
        { name: "role", label: "Role", type: "text", required: false },
        { name: "challenge", label: "What are you working on?", type: "textarea", required: true },
        { name: "timescale", label: "Timescale", type: "text", required: false },
        { name: "budgetBand", label: "Budget band (optional)", type: "select", required: false },
        { name: "consent", label: "I consent to being contacted about this enquiry", type: "checkbox", required: true },
      ],
    },
  ],
  pipeline: "Advisory",
  slaDays: 2,
  ackTemplate: "qualification-call-link",
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/advisory",
};
