import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { Timeline } from "@/components/ui/Timeline";
import { TestimonialSection } from "@/components/ui/Testimonial";
import { EnquiryWizard } from "@/components/forms/EnquiryWizard";
import { CtaBand } from "@/components/ui/CtaBand";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { advisoryRoute } from "@/content/routes/advisory";
import { toClientRoute } from "@/content/routes";
import { getTimeline, getTestimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Career Portfolio — Victor Sonde",
  description:
    "An evidence-rich professional portfolio — the roles, sectors and countries behind Victor Sonde's work, treated the way Evidentize treats any candidate's: claims backed by artefacts.",
};

/**
 * `/portfolio/career` (05-key-pages.md §2). Most sections here depend on
 * verified career data that doesn't exist yet (content/timeline.ts is
 * empty) — Timeline renders its own EmptyState, and sections needing
 * unverified specifics (fact chips, credentials, methodologies, selected
 * projects, skills architecture) are omitted rather than guessed at.
 */
export default function CareerPortfolioPage() {
  const timeline = getTimeline();
  const testimonials = getTestimonials();

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "Career Portfolio", url: "/portfolio/career" },
          ]),
          { "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: { "@type": "Person", name: "Victor Sonde" } },
        ]}
      />

      <Hero
        headline="An evidence architecture, not a résumé."
        supportingCopy="Every claim on this page is backed by something verifiable — the same standard Evidentize applies to any candidate's portfolio."
        primaryCta={{ ctaId: "cta.advisory", href: "#enquire" }}
      />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Career timeline</h2>
          <div className="mt-6">
            <Timeline entries={timeline} />
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <div className="max-w-prose space-y-4">
            <h2 className="text-xl font-semibold text-ink">Entrepreneurship & institution building</h2>
            <p className="text-ink opacity-80">
              Alongside individual roles, this work spans founding and building the five ventures in the portfolio.
            </p>
            <Link href="/ventures" className="inline-block font-medium text-brand-primary hover:underline">
              See the ventures →
            </Link>
          </div>
        </div>
      </section>

      <TestimonialSection testimonials={testimonials} heading="What people say" />

      <section id="enquire">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Enquire about advisory</h2>
          <div className="mt-8 max-w-xl">
            <EnquiryWizard route={toClientRoute(advisoryRoute)} />
          </div>
        </div>
      </section>

      <CtaBand
        headline="See the speaking footage."
        primaryCta={{ ctaId: "cta.speaking", label: "Visit Speaking", href: "/speaking" }}
        position="career-portfolio-final-cta"
      />
    </>
  );
}
