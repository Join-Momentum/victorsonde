import type { LeadRoute } from "@/types/models";

/** Career Bridge employer partnership (09-seo-analytics-crm.md §3.2). */
export const cbEmployerRoute: LeadRoute = {
  route: "cb-employer",
  steps: [
    {
      id: "employer",
      title: "Partner as an employer",
      fields: [
        { name: "company", label: "Company", type: "text", required: true },
        { name: "name", label: "Your name", type: "text", required: true },
        { name: "email", label: "Work email", type: "email", required: true },
        { name: "hiringVolume", label: "Typical hiring volume", type: "select", required: false },
        { name: "consent", label: "I consent to being contacted about this partnership", type: "checkbox", required: true },
      ],
    },
  ],
  pipeline: "CB — Employers",
  slaDays: 2,
  ackTemplate: "partner-intro",
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/career-bridge-employer",
};
