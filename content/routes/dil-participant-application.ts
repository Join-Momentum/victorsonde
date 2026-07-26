import type { LeadRoute } from "@/types/models";

/**
 * DIL application route, `applications_open` programmeState
 * (04-design-intelligence-lab.md §30).
 */
export const dilParticipantApplication: LeadRoute = {
  route: "dil-participant-application",
  steps: [
    {
      id: "identity",
      title: "About you",
      fields: [
        { name: "name", label: "Full name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone", type: "tel", required: false },
        { name: "ageBand", label: "Age band", type: "select", required: true },
        { name: "country", label: "Country", type: "text", required: true },
        { name: "city", label: "City", type: "text", required: true },
      ],
    },
    {
      id: "context",
      title: "Your context",
      fields: [
        { name: "educationEmploymentStatus", label: "Education / employment status", type: "select", required: true },
        { name: "motivation", label: "Why do you want to join the Lab?", type: "textarea", required: true, maxLength: 900, helpText: "≤150 words" },
        { name: "trackPreference", label: "Track preference", type: "select", required: true },
        { name: "availabilityConfirmed", label: "I can commit the required hours per week", type: "checkbox", required: true },
        { name: "howHeard", label: "How did you hear about the Lab?", type: "select", required: false },
        { name: "accessibilityNeeds", label: "Accessibility needs (optional)", type: "textarea", required: false },
      ],
    },
    {
      id: "consent",
      title: "Consent",
      fields: [
        { name: "consentProcessing", label: "I consent to my application being processed", type: "checkbox", required: true },
        { name: "consentComms", label: "I'd like to receive programme updates by email", type: "checkbox", required: false },
      ],
    },
  ],
  pipeline: "DIL — Participants",
  slaDays: 5,
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/dil",
};
