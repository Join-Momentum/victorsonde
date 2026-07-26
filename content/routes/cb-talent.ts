import type { LeadRoute } from "@/types/models";

/** Career Bridge talent pathway sign-up (09-seo-analytics-crm.md §3.2). */
export const cbTalentRoute: LeadRoute = {
  route: "cb-talent",
  steps: [
    {
      id: "pathway",
      title: "Start your talent pathway",
      fields: [
        { name: "name", label: "Full name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "careerStage", label: "Career stage", type: "select", required: true },
        { name: "goal", label: "What are you hoping to achieve?", type: "textarea", required: false },
        { name: "consent", label: "I consent to being contacted about my talent pathway", type: "checkbox", required: true },
      ],
    },
  ],
  pipeline: "Talent — Career Bridge",
  slaDays: 3,
  ackTemplate: "welcome-pathway-steps",
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/career-bridge",
};
