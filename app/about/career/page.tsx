import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { CtaBand } from "@/components/ui/CtaBand";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { careerJourneyContent } from "@/content/pages/career-journey";
import { getTimeline } from "@/lib/content";

export const metadata: Metadata = {
  title: careerJourneyContent.seo.title,
  description: careerJourneyContent.seo.metaDescription,
};

/**
 * `/about/career` (02-sitemap.md §2 row 4). Tier 2, lightly specified —
 * see content/pages/career-journey.ts for why this stays minimal. The
 * chronological entries themselves live in the Career Portfolio's
 * Timeline (content/timeline.ts) — currently empty, so this page points
 * there rather than duplicating an empty state.
 */
export default function CareerJourneyPage() {
  const timeline = getTimeline();

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
            { name: "Career Journey", url: "/about/career" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: careerJourneyContent.seo.title,
            description: careerJourneyContent.seo.metaDescription,
            mainEntity: { "@type": "Person", name: "Victor Sonde" },
          },
        ]}
      />

      <Hero headline={careerJourneyContent.hero.headline} primaryCta={careerJourneyContent.hero.primaryCta} />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <div className="max-w-prose space-y-6">
            {careerJourneyContent.intro && <p className="text-lg text-ink sm:text-xl">{careerJourneyContent.intro}</p>}
            <Link href="/portfolio/career" className="inline-block font-medium text-brand-primary hover:underline">
              {timeline.length > 0 ? "Explore the full Career Portfolio →" : "The full Career Portfolio is in progress →"}
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        headline="Enquire about advisory."
        primaryCta={{ ctaId: "cta.advisory" }}
        secondaryCta={{ ctaId: "cta.news" }}
        position="career-journey-final-cta"
      />
    </>
  );
}
