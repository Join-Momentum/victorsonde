import type { LeadRoute } from "@/types/models";

/** Speaking enquiry — 4 steps (05-key-pages.md §3.13). */
export const speakingRoute: LeadRoute = {
  route: "speaking",
  steps: [
    {
      id: "event",
      title: "Event",
      fields: [
        { name: "organisation", label: "Organisation", type: "text", required: true },
        { name: "contactName", label: "Contact name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "telephone", label: "Telephone", type: "tel", required: false },
        { name: "eventName", label: "Event name", type: "text", required: true },
        { name: "eventDate", label: "Event date", type: "date", required: false, helpText: "Leave blank and note flexibility below if not yet fixed" },
        { name: "dateFlexible", label: "Date is flexible", type: "checkbox", required: false },
        { name: "location", label: "Location", type: "text", required: true },
        {
          name: "format",
          label: "In-person / virtual / hybrid",
          type: "select",
          required: true,
          options: [
            { value: "in-person", label: "In-person" },
            { value: "virtual", label: "Virtual" },
            { value: "hybrid", label: "Hybrid" },
          ],
        },
      ],
    },
    {
      id: "audience",
      title: "Audience",
      fields: [
        { name: "audienceSizeBand", label: "Audience size", type: "select", required: true },
        { name: "audienceType", label: "Audience type", type: "select", required: true },
        { name: "sector", label: "Sector", type: "text", required: false },
      ],
    },
    {
      id: "session",
      title: "Session",
      fields: [
        { name: "preferredTopic", label: "Preferred topic", type: "select", required: false, helpText: "Choose from the 12 signature topics, or Other" },
        { name: "requiredFormat", label: "Required format", type: "select", required: true },
        {
          name: "recordingRequirements",
          label: "Recording requirements",
          type: "select",
          required: true,
          options: [
            { value: "none", label: "None" },
            { value: "audio", label: "Audio" },
            { value: "video", label: "Video" },
            { value: "livestream", label: "Livestream" },
          ],
        },
        { name: "additionalContext", label: "Additional context", type: "textarea", required: false },
      ],
    },
    {
      id: "logistics",
      title: "Logistics",
      fields: [
        { name: "budgetRange", label: "Budget range", type: "select", required: true, helpText: "Includes 'Prefer to discuss'" },
        {
          name: "travelCoverage",
          label: "Travel coverage",
          type: "select",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "partial", label: "Partial" },
          ],
        },
        { name: "consent", label: "I consent to being contacted about this enquiry", type: "checkbox", required: true },
      ],
    },
  ],
  pipeline: "Speaking",
  slaDays: 1,
  ackTemplate: "speaker-kit-auto-send",
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/speaking",
};
