import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { WhereThisFits } from "@/components/ventures/WhereThisFits";
import { JourneyDiagram } from "@/components/ui/JourneyDiagram";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { EnquiryWizard } from "@/components/forms/EnquiryWizard";
import { StructuredData, breadcrumbList, faqPageSchema } from "@/components/seo/StructuredData";
import { evidentizeHowItWorks } from "@/content/journey/evidentize-how-it-works";
import { demoRoute } from "@/content/routes/demo";
import { toClientRoute } from "@/content/routes";
import { getVenture } from "@/lib/content";

export const metadata: Metadata = {
  title: "Evidentize.IO — Prove What You Can Do",
  description:
    "Evidentize is an AI-powered simulation, capability-evaluation and portfolio platform — practise realistic work, receive feedback, and publish verified evidence.",
};

const faqItems = [
  {
    q: "What is Evidentize?",
    a: "An AI-powered simulation and portfolio platform that lets candidates practise realistic work and publish verified evidence of what they can do.",
  },
  {
    q: "Who is it for?",
    a: "Employers evaluating candidates, programme providers running cohorts, and candidates building a portfolio of verified capability.",
  },
  {
    q: "How is evidence verified?",
    a: "Work is reviewed against a rubric by a named reviewer, with AI-supported feedback in the loop — every piece of evidence is dated and attributable.",
  },
];

/** `/ventures/evidentize` (05-key-pages.md §1.3). */
export default function EvidentizePage() {
  const venture = getVenture("evidentize");
  if (!venture) return null;

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "Ventures", url: "/ventures" },
            { name: "Evidentize.IO", url: "/ventures/evidentize" },
          ]),
          { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Evidentize.IO" },
          faqPageSchema(faqItems),
        ]}
      />

      <Hero
        headline="Prove what you can do."
        supportingCopy="An AI-powered simulation, capability-evaluation and portfolio platform — practise realistic work, receive feedback, and publish verified evidence."
        primaryCta={{ ctaId: "cta.demo", href: "#demo" }}
      />

      <WhereThisFits builds={venture.builds} />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <div className="max-w-prose space-y-4">
            <h2 className="text-2xl font-semibold text-ink">CVs and certifications aren&apos;t enough.</h2>
            <p className="text-lg text-ink opacity-80">
              A CV claims. Evidentize shows the work itself — a simulated task, an AI-supported feedback loop, expert
              review, and a portfolio entry anyone can verify.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">How it works</h2>
          <div className="mt-6">
            <JourneyDiagram stages={evidentizeHowItWorks} />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-ink">For employers</h3>
              <p className="mt-2 text-sm text-ink-muted">Screen and hire from verified, portfolio-based evidence.</p>
            </div>
            <div>
              <h3 className="font-semibold text-ink">For programme providers</h3>
              <p className="mt-2 text-sm text-ink-muted">Cohort tools for bootcamps, universities and workforce programmes.</p>
            </div>
            <div>
              <h3 className="font-semibold text-ink">For mentors & reviewers</h3>
              <p className="mt-2 text-sm text-ink-muted">A review queue and rubric-based tools for assessing evidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-xl font-semibold text-ink">Trust & responsible AI</h2>
          <p className="mt-3 max-w-prose text-ink-muted">
            AI supports feedback, never replaces the human reviewer. Every evidence entry is attributable, dated and
            reviewable.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">FAQ</h2>
          <div className="mt-6">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section id="demo" className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Request a demo</h2>
          <div className="mt-8 max-w-xl">
            <EnquiryWizard route={toClientRoute(demoRoute)} />
          </div>
        </div>
      </section>
    </>
  );
}
