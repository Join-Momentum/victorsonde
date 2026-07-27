import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { EnquiryWizard } from "@/components/forms/EnquiryWizard";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { generalRoute } from "@/content/routes/general";
import { toClientRoute } from "@/content/routes";

export const metadata: Metadata = {
  title: "Contact — Work With Victor",
  description: "Tell us what you're building — routed to the right pipeline, whether that's speaking, advisory, a venture partnership, or something else.",
};

const routes = [
  { label: "Speaking", description: "Book a keynote or facilitation.", href: "/speaking#enquire" },
  { label: "Advisory", description: "Founder, executive or organisational advisory.", href: "/portfolio/career#enquire" },
  { label: "Join Momentum", description: "Transformation & capability programmes.", href: "/ventures/join-momentum#enquire" },
  { label: "Career Bridge", description: "Talent pathways & employer partnerships.", href: "/ventures/career-bridge#pathway" },
  { label: "Evidentize demo", description: "See the platform in action.", href: "/ventures/evidentize#demo" },
  { label: "Design Intelligence Lab", description: "Apply, sponsor, mentor or partner.", href: "/design-intelligence-lab" },
  { label: "Financial resilience", description: "Request an introductory conversation.", href: "/financial-resilience#enquire" },
  { label: "Media", description: "Press & interview requests.", href: "/media-room" },
];

/**
 * `/contact` (02-sitemap.md §3.8). Route selection deep-links to the
 * relevant page's own form instead of embedding every route's form here
 * — the spec's fuller version preserves entered data across that
 * hand-off; this simpler version doesn't yet (flagged, not hidden).
 * "Something else" gets a real inline form since there's nowhere else
 * for it to deep-link to.
 */
export default function ContactPage() {
  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])} />

      <Hero headline="Tell us what you're building." primaryCta={{ ctaId: "cta.work", label: "Jump to the form", href: "#general" }} />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">I&apos;m enquiring about…</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {routes.map((route) => (
              <a
                key={route.label}
                href={route.href}
                className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-5 hover:border-brand-primary"
              >
                <span className="font-semibold text-ink">{route.label}</span>
                <span className="text-sm text-ink-muted">{route.description}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="general" className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Something else</h2>
          <div className="mt-8 max-w-xl">
            <EnquiryWizard route={toClientRoute(generalRoute)} />
          </div>
        </div>
      </section>
    </>
  );
}
