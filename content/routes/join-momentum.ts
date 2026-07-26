import type { LeadRoute } from "@/types/models";

/**
 * Join Momentum enquiry (05-key-pages.md §1.1 item 11). One form, pipeline
 * splits by orgType — Government & Institutional / Corporate / Defence &
 * Security (Defence gets a personal ack with no marketing automation, see
 * 09-seo-analytics-crm.md §3.2).
 */
export const joinMomentumRoute: LeadRoute = {
  route: "join-momentum",
  steps: [
    {
      id: "enquiry",
      title: "Tell us about your organisation",
      fields: [
        {
          name: "orgType",
          label: "Organisation type",
          type: "select",
          required: true,
          options: [
            { value: "government", label: "Government" },
            { value: "public-sector", label: "Public-sector institution" },
            { value: "corporate", label: "Corporate" },
            { value: "defence-security", label: "Defence & security" },
            { value: "international-partner", label: "International partner" },
          ],
        },
        { name: "organisation", label: "Organisation", type: "text", required: true },
        { name: "name", label: "Name", type: "text", required: true },
        { name: "officialEmail", label: "Official email", type: "email", required: true },
        { name: "country", label: "Country", type: "text", required: true },
        {
          name: "capabilityAreas",
          label: "Capability area(s)",
          type: "multiselect",
          required: true,
          options: [
            { value: "organisational-transformation", label: "Organisational transformation" },
            { value: "product-digital-leadership", label: "Product & digital leadership" },
            { value: "ai-emerging-tech", label: "AI & emerging-technology capability" },
            { value: "defence-security-programmes", label: "Defence & security programmes" },
            { value: "strategic-communications", label: "Strategic communications" },
            { value: "international-programme-delivery", label: "International programme delivery" },
            { value: "capability-development-workshops", label: "Capability-development workshops" },
          ],
        },
        { name: "timescale", label: "Timescale", type: "text", required: false },
        { name: "brief", label: "Brief", type: "textarea", required: true },
        { name: "consent", label: "I consent to being contacted about this enquiry", type: "checkbox", required: true },
      ],
    },
  ],
  pipeline: (data) => {
    if (data.orgType === "defence-security") return "Join Momentum — Defence & Security";
    if (data.orgType === "government" || data.orgType === "public-sector")
      return "Join Momentum — Government & Institutional";
    return "Join Momentum — Corporate";
  },
  slaDays: 2,
  consentCopyVersion: "v1",
  thankYouPath: "/thanks/join-momentum",
};
