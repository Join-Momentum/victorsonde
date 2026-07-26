import type { Cta } from "@/types/models";

/**
 * Canonical CTA registry (01-strategy.md §4.3). Labels are fixed —
 * consistency is treated as a conversion feature. Reuse verbatim; do not
 * rephrase per page.
 */
export const ctas: Cta[] = [
  { id: "cta.work", label: "Work With Victor", href: "/contact" },
  { id: "cta.dil.apply", label: "Apply to the Lab", href: "/design-intelligence-lab#apply" },
  { id: "cta.dil.waitlist", label: "Join the Waitlist", href: "/design-intelligence-lab#apply" },
  { id: "cta.dil.sponsor", label: "Sponsor a Cohort", href: "/design-intelligence-lab#sponsor" },
  { id: "cta.dil.mentor", label: "Become a Mentor", href: "/design-intelligence-lab#mentor" },
  { id: "cta.dil.challenge", label: "Submit a Challenge", href: "/design-intelligence-lab#challenge" },
  { id: "cta.dil.city", label: "Bring the Lab to My City", href: "/design-intelligence-lab#city" },
  { id: "cta.demo", label: "Request a Demo", href: "/ventures/evidentize#demo" },
  { id: "cta.speaking", label: "Enquire About Booking", href: "/speaking#enquire" },
  { id: "cta.advisory", label: "Enquire About Advisory", href: "/advisory#enquire" },
  { id: "cta.jm", label: "Discuss a Programme", href: "/ventures/join-momentum#enquire" },
  { id: "cta.cb.talent", label: "Start Your Talent Pathway", href: "/ventures/career-bridge#pathway" },
  { id: "cta.cb.partner", label: "Partner With the Foundation", href: "/ventures/career-bridge#partner" },
  { id: "cta.fin", label: "Request an Introductory Conversation", href: "/financial-resilience#enquire" },
  { id: "cta.news", label: "Get the Newsletter", href: "#newsletter" },
  { id: "cta.book", label: "Join the Launch List", href: "/books" },
  { id: "cta.kit", label: "Download the Speaker Kit", href: "/speaking#kit" },
];

export function getCta(id: string): Cta | undefined {
  return ctas.find((c) => c.id === id);
}
