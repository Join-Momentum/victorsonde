import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { JourneyDiagram } from "@/components/ui/JourneyDiagram";
import { VentureCard } from "@/components/cards/VentureCard";
import { AudienceRouter } from "@/components/ui/AudienceRouter";
import { EmptyState } from "@/components/ui/EmptyState";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { theoryOfChange } from "@/content/journey/theory-of-change";
import { getVenture, getMetrics } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impact & Philanthropy",
  description: "The mission, theory of change and how to fund or partner on impact across the portfolio.",
};

const fundingRoutes = [
  { label: "Fund the Lab", description: "Sponsor a Design Intelligence Lab cohort.", ctaId: "cta.dil.sponsor" },
  { label: "Partner on impact", description: "Explore a structured partnership with Career Bridge.", ctaId: "cta.cb.partner" },
];

/** `/impact` (02-sitemap.md §3.6). */
export default function ImpactPage() {
  const dil = getVenture("design-intelligence-lab");
  const careerBridge = getVenture("career-bridge");
  const metrics = getMetrics(["build-legacies"]);

  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Impact & Philanthropy", url: "/impact" }])} />

      <Hero
        headline="Impact you can verify."
        primaryCta={{ ctaId: "cta.cb.partner", label: "Partner on impact", href: "#partner" }}
        secondaryCta={{ ctaId: "cta.theory", label: "Read the theory of change", href: "#theory" }}
      />

      <section id="theory">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Theory of change</h2>
          <div className="mt-6">
            <JourneyDiagram stages={theoryOfChange} />
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Programmes</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {dil && <VentureCard title={dil.name} purposeLine={dil.oneLiner} builds={dil.builds} href={dil.href} />}
            {careerBridge && (
              <VentureCard title={careerBridge.name} purposeLine={careerBridge.oneLiner} builds={careerBridge.builds} href={careerBridge.href} />
            )}
          </div>
        </div>
      </section>

      {metrics.length > 0 && (
        <section>
          <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
            <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Impact metrics</h2>
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

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Impact stories</h2>
          <div className="mt-6">
            <EmptyState message="Our first cohort's stories will be published here. Follow the Lab to meet them." />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <p className="max-w-prose text-ink-muted">
            Programmes working with young people follow a published safeguarding policy — see{" "}
            <Link href="/legal/safeguarding" className="font-medium text-brand-primary hover:underline">
              Safeguarding Policy
            </Link>
            .
          </p>
        </div>
      </section>

      <div id="partner">
        <AudienceRouter heading="Fund or partner on impact" routes={fundingRoutes} position="impact-router" />
      </div>
    </>
  );
}
