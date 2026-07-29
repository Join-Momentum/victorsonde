import type { LeadRoute } from "@/types/models";

/**
 * DIL become-a-mentor CTA (04-design-intelligence-lab.md §33). Also used
 * as the general "Community — Mentors & Reviewers" route from
 * /opportunities — the pipeline is the same vetting workflow either way.
 */
export const dilMentorRoute: LeadRoute = {
  route: "dil-mentor",
  steps: [
    {
      id: "mentor",
      title: "Become a mentor or reviewer",
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "linkedin", label: "LinkedIn URL", type: "text", required: false },
        {
          name: "expertiseAreas",
          label: "Expertise areas",
          type: "multiselect",
          required: true,
          options: [
            { value: "product", label: "Product" },
            { value: "engineering", label: "Engineering" },
            { value: "design", label: "Design" },
            { value: "policy", label: "Policy" },
            { value: "finance", label: "Finance" },
            { value: "research", label: "Research" },
          ],
        },
        { name: "languages", label: "Languages", type: "text", required: false },
        { name: "availabilityHours", label: "Availability (hours/month)", type: "select", required: true },
        { name: "motivation", label: "Why do you want to mentor or review?", type: "textarea", required: true },
        { name: "safeguardingConsent", label: "I consent to a safeguarding check where required", type: "checkbox", required: true },
      ],
    },
  ],
  pipeline: "Community — Mentors & Reviewers",
  slaDays: 7,
  ackTemplate: "vetting-steps",
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/mentor",
};
