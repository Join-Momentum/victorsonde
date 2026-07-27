import type { LeadRoute } from "@/types/models";

/** Catch-all "Something else" route from the Contact page router. */
export const generalRoute: LeadRoute = {
  route: "general",
  steps: [
    {
      id: "general",
      title: "Tell us what you're building",
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "What can we help with?", type: "textarea", required: true },
        { name: "consent", label: "I consent to being contacted about this enquiry", type: "checkbox", required: true },
      ],
    },
  ],
  pipeline: "General",
  slaDays: 3,
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/general",
};
