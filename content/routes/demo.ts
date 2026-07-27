import type { LeadRoute } from "@/types/models";

/**
 * Evidentize demo request (05-key-pages.md §1.3 item 14). Pipeline splits
 * Employer/Provider Demo by `useCase` — highest-SLA route in the registry
 * (1 business day, 09-seo-analytics-crm.md §3.2).
 */
export const demoRoute: LeadRoute = {
  route: "demo",
  steps: [
    {
      id: "demo",
      title: "Request a demo",
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Work email", type: "email", required: true },
        { name: "company", label: "Company", type: "text", required: true },
        { name: "role", label: "Role", type: "text", required: false },
        {
          name: "useCase",
          label: "I'm evaluating as a...",
          type: "select",
          required: true,
          options: [
            { value: "employer", label: "Employer" },
            { value: "provider", label: "Programme provider" },
            { value: "other", label: "Other" },
          ],
        },
        { name: "teamSize", label: "Team size", type: "select", required: false },
        { name: "region", label: "Region", type: "text", required: false },
        { name: "consent", label: "I consent to being contacted about this demo request", type: "checkbox", required: true },
      ],
    },
  ],
  pipeline: (data) => (data.useCase === "provider" ? "Evidentize — Provider Demo" : "Evidentize — Employer Demo"),
  slaDays: 1,
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/demo",
};
