export interface ThankYouContent {
  heading: string;
  body: string;
  sla?: string;
  nextCta: { label: string; href: string };
}

/**
 * `/thanks/[route]` (02-sitemap.md §5, row 49) — one entry per
 * `LeadRoute.thankYouPath` segment. Keep this in sync when adding a new
 * route in content/routes/. The conversion event fires client-side in
 * EnquiryWizard right after a successful submit (not re-fired here) —
 * that avoids double-counting on a page refresh, which the spec's
 * "dedupe by submission id" note is guarding against by another route
 * (this one doesn't need a submission id at all if the event only ever
 * fires once, at submit time).
 */
export const thankYouContent: Record<string, ThankYouContent> = {
  dil: {
    heading: "You're in the pipeline.",
    body: "Thanks for your interest in the Design Intelligence Lab. We'll be in touch with next steps.",
    sla: "Expect an update within 5 days.",
    nextCta: { label: "Explore the Impact Portfolio", href: "/portfolio" },
  },
  speaking: {
    heading: "Enquiry received.",
    body: "Thanks for your speaking enquiry — someone will follow up shortly.",
    sla: "Expect a reply within 1 business day.",
    nextCta: { label: "See past topics", href: "/speaking" },
  },
  "join-momentum": {
    heading: "Enquiry received.",
    body: "Thanks for reaching out to Join Momentum. We'll be in touch soon.",
    sla: "Expect a reply within 2 business days.",
    nextCta: { label: "Explore the Impact Portfolio", href: "/portfolio" },
  },
  "career-bridge": {
    heading: "Welcome to the pathway.",
    body: "Thanks for starting your talent pathway with Career Bridge Foundation.",
    sla: "Expect a welcome email within 3 days.",
    nextCta: { label: "Learn about Career Bridge", href: "/ventures/career-bridge" },
  },
  "career-bridge-employer": {
    heading: "Enquiry received.",
    body: "Thanks for your interest in partnering with Career Bridge Foundation as an employer.",
    sla: "Expect a reply within 2 business days.",
    nextCta: { label: "Learn about Career Bridge", href: "/ventures/career-bridge" },
  },
  general: {
    heading: "Message received.",
    body: "Thanks for getting in touch — we'll route this to the right person.",
    sla: "Expect a reply within 3 business days.",
    nextCta: { label: "Explore the Impact Portfolio", href: "/portfolio" },
  },
  advisory: {
    heading: "Enquiry received.",
    body: "Thanks for your advisory enquiry.",
    sla: "Expect a reply within 2 business days, including a qualification call link.",
    nextCta: { label: "Explore the Impact Portfolio", href: "/portfolio" },
  },
  demo: {
    heading: "Demo request received.",
    body: "Thanks for requesting an Evidentize demo — this is our fastest-response pipeline.",
    sla: "Expect scheduling details within 1 business day.",
    nextCta: { label: "Learn about Evidentize", href: "/ventures/evidentize" },
  },
};
