import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { WhereThisFits } from "@/components/ventures/WhereThisFits";
import { JourneyDiagram } from "@/components/ui/JourneyDiagram";
import { EnquiryWizard } from "@/components/forms/EnquiryWizard";
import { CtaLink } from "@/components/ui/CtaLink";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { joinMomentumDelivery } from "@/content/journey/join-momentum-delivery";
import { joinMomentumRoute } from "@/content/routes/join-momentum";
import { toClientRoute } from "@/content/routes";
import { getVenture } from "@/lib/content";

export const metadata: Metadata = {
  title: "Join Momentum — Transformation & Capability Partner",
  description:
    "Join Momentum is a transformation and capability partner across product strategy, digital transformation, AI, defence and security, strategic communications and international delivery.",
};

const capabilityAreas = [
  "Organisational transformation",
  "Product & digital leadership",
  "AI & emerging-technology capability",
  "Defence & security programmes",
  "Strategic communications",
  "International programme delivery",
  "Capability-development workshops",
];

const workWith = ["Governments", "Defence & security organisations", "Public-sector institutions", "Private companies", "International partners"];

/** `/ventures/join-momentum` (05-key-pages.md §1.1). */
export default function JoinMomentumPage() {
  const venture = getVenture("join-momentum");
  if (!venture) return null;

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "Ventures", url: "/ventures" },
            { name: "Join Momentum", url: "/ventures/join-momentum" },
          ]),
          { "@context": "https://schema.org", "@type": "Organization", name: "Join Momentum Inc", founder: { "@type": "Person", name: "Victor Sonde" } },
        ]}
      />

      <Hero
        headline="Transformation and capability, delivered."
        supportingCopy="A transformation partner across product strategy, digital transformation, AI and emerging technology, defence and security, strategic communications and international capability development."
        primaryCta={{ ctaId: "cta.jm", href: "#enquire" }}
        secondaryCta={{ ctaId: "cta.case-studies", label: "See case studies", href: "/case-studies" }}
      />

      <WhereThisFits builds={venture.builds} />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Who we work with</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {workWith.map((item) => (
              <li key={item} className="rounded-full border border-border px-4 py-2 text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Capability areas</h2>
          {/* flex-wrap, not a strict grid — 7 items don't divide evenly into
              rows, and a grid+bg-border hairline trick leaves a dangling
              empty coloured cell in the last row when they don't. */}
          <ul className="mt-6 flex flex-wrap gap-4">
            {capabilityAreas.map((area) => (
              <li
                key={area}
                className="flex-1 basis-64 rounded-lg border border-border bg-surface p-6 text-base font-medium text-ink"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Delivery model</h2>
          <div className="mt-6">
            <JourneyDiagram stages={joinMomentumDelivery} />
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-xl font-semibold text-ink">Expert consultant network</h2>
          <p className="mt-3 max-w-prose text-ink-muted">
            Programmes are delivered with a network of vetted specialists across each capability area, brought in as
            engagements require.
          </p>
          <div className="mt-6">
            <CtaLink ctaId="cta.jm.network" label="Join the network" href="/contact" position="jm-network" variant="ghost" />
          </div>
        </div>
      </section>

      <section id="enquire">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Discuss a programme</h2>
          <div className="mt-8 max-w-xl">
            <EnquiryWizard route={toClientRoute(joinMomentumRoute)} />
          </div>
        </div>
      </section>
    </>
  );
}
