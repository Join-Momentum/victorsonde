import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { WhereThisFits } from "@/components/ventures/WhereThisFits";
import { JourneyDiagram } from "@/components/ui/JourneyDiagram";
import { EnquiryWizard } from "@/components/forms/EnquiryWizard";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { careerBridgePathway } from "@/content/journey/career-bridge-pathway";
import { cbTalentRoute } from "@/content/routes/cb-talent";
import { cbEmployerRoute } from "@/content/routes/cb-employer";
import { toClientRoute } from "@/content/routes";
import { getVenture } from "@/lib/content";

export const metadata: Metadata = {
  title: "Career Bridge Foundation",
  description:
    "Career Bridge Foundation is a workforce-activation and social-impact organisation: evidence-based employability, portfolios and pathways to economic opportunity.",
};

const pillars = [
  { title: "Career portfolio development", body: "Building a portfolio of real, evidenced work." },
  { title: "Portfolio Simulations", body: "Practising real work through realistic simulations." },
  { title: "Mentoring", body: "Guidance from people who've done the work." },
  { title: "Capability verification", body: "Evidence reviewed and verified, not just claimed." },
];

/** `/ventures/career-bridge` (05-key-pages.md §1.2). */
export default function CareerBridgePage() {
  const venture = getVenture("career-bridge");
  if (!venture) return null;

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "Ventures", url: "/ventures" },
            { name: "Career Bridge Foundation", url: "/ventures/career-bridge" },
          ]),
          { "@context": "https://schema.org", "@type": "Organization", name: "Career Bridge Foundation", founder: { "@type": "Person", name: "Victor Sonde" } },
        ]}
      />

      <Hero
        headline="From potential to pathway."
        supportingCopy="A workforce-activation and social-impact organisation — practical capability, verified evidence, portfolios and pathways into economic opportunity."
        primaryCta={{ ctaId: "cta.cb.talent", href: "#pathway" }}
        secondaryCta={{ ctaId: "cta.cb.partner", href: "#partner" }}
      />

      <WhereThisFits builds={venture.builds} />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <div className="max-w-prose space-y-4">
            <h2 className="text-2xl font-semibold text-ink">CVs claim. Portfolios demonstrate.</h2>
            <p className="text-lg text-ink opacity-80">
              Evidence-based employability means backing every claim with something a candidate actually did — not a
              line on a CV, but a piece of verifiable work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">What we do</h2>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="bg-surface p-6">
                <h3 className="font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">The talent pathway</h2>
          <div className="mt-6">
            <JourneyDiagram stages={careerBridgePathway} />
          </div>
        </div>
      </section>

      <section id="pathway" className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Start your talent pathway</h2>
          <div className="mt-8 max-w-xl">
            <EnquiryWizard route={toClientRoute(cbTalentRoute)} />
          </div>
        </div>
      </section>

      <section id="partner">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Partner with the Foundation</h2>
          <p className="mt-3 max-w-prose text-ink-muted">
            Hire from verified talent, or co-design a simulation with us.
          </p>
          <div className="mt-8 max-w-xl">
            <EnquiryWizard route={toClientRoute(cbEmployerRoute)} />
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-xl font-semibold text-ink">Governance & safeguarding</h2>
          <p className="mt-3 max-w-prose text-ink-muted">
            Career Bridge follows a published safeguarding policy — see{" "}
            <Link href="/legal/safeguarding" className="font-medium text-brand-primary hover:underline">
              Safeguarding Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
