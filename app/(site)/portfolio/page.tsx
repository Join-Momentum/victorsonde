import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { ImpactPortfolioMap } from "@/components/portfolio/ImpactPortfolioMap";
import { JourneyDiagram } from "@/components/ui/JourneyDiagram";
import { AudienceRouter } from "@/components/ui/AudienceRouter";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { portfolioContent, portfolioAudienceRoutes } from "@/content/pages/portfolio";
import { mainArc } from "@/content/journey/main-arc";
import { getBuilds, getVentures, getMetrics } from "@/lib/content";

export const metadata: Metadata = {
  title: portfolioContent.seo.title,
  description: portfolioContent.seo.metaDescription,
};

/**
 * `/portfolio` (02-sitemap.md §3.3). Evidence-of-impact metrics, the
 * featured case study and the connective-narrative section all render
 * nothing right now — no verified metrics, no case studies yet, and
 * connections[] is empty pending confirmation of actual operational
 * relationships between ventures (01-strategy.md §2.4).
 */
export default function PortfolioPage() {
  const builds = getBuilds();
  const ventures = getVentures();
  const metrics = getMetrics();

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "Impact Portfolio", url: "/portfolio" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: portfolioContent.seo.title,
            description: portfolioContent.seo.metaDescription,
          },
        ]}
      />

      <Hero
        headline={portfolioContent.hero.headline}
        supportingCopy={portfolioContent.hero.supportingCopy}
        primaryCta={portfolioContent.hero.primaryCta}
        secondaryCta={portfolioContent.hero.secondaryCta}
      />

      <section id="map">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">The map</h2>
          <div className="mt-6">
            <ImpactPortfolioMap builds={builds} ventures={ventures} />
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">The flow</h2>
          <div className="mt-6">
            <JourneyDiagram stages={mainArc} />
          </div>
        </div>
      </section>

      {metrics.length > 0 && (
        <section>
          <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
            <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Evidence of impact</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.slug} className="rounded-lg border border-border p-6">
                  <p className="text-3xl font-semibold text-ink">
                    {metric.value}
                    {metric.unit}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <AudienceRouter heading="What brings you here?" routes={portfolioAudienceRoutes} position="portfolio-router" />

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <NewsletterForm context="portfolio" />
        </div>
      </section>
    </>
  );
}
