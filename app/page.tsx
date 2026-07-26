import { Hero } from "@/components/ui/Hero";
import { BuildStrip } from "@/components/home/BuildStrip";
import { FeaturedVenture } from "@/components/home/FeaturedVenture";
import { VentureList } from "@/components/home/VentureList";
import { CtaBand } from "@/components/ui/CtaBand";
import { getVentures, getBuilds } from "@/lib/content";

/**
 * This is a Phase 1 homepage foundation — Hero, BuildStrip, featured DIL,
 * remaining ventures, closing CtaBand — not yet the full 26-section build
 * from 03-homepage.md (PROJECT-CHECKLIST.md §4). Sections still to add:
 * career timeline, evidence metrics, case study, keynote video, insights,
 * financial-resilience intro, speaking/advisory split, testimonials,
 * international map, books, gallery, newsletter, social row, audience
 * router.
 */
export default function Home() {
  const ventures = getVentures();
  const builds = getBuilds();
  const dil = ventures.find((v) => v.id === "design-intelligence-lab");
  const otherVentures = ventures.filter((v) => v.id !== "design-intelligence-lab");

  return (
    <>
      <Hero
        eyebrow="Victor Sonde"
        headline="Building people, platforms and institutions for transformative impact."
        supportingCopy="Turning potential into capability, evidence, opportunity and lasting impact."
        primaryCta={{ ctaId: "cta.work" }}
        secondaryCta={{ ctaId: "cta.demo", label: "Explore the Impact Portfolio", href: "/portfolio" }}
      />

      <BuildStrip builds={builds} />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">The ventures</h2>

          {dil && (
            <div className="mt-6">
              <FeaturedVenture
                eyebrow="Flagship programme"
                title="Design Intelligence Lab — building Africa's next generation of problem solvers."
                copy="An AI-powered simulation and portfolio experience for Africans aged 18–45: investigate real problems, practise real work, and leave with evidence of what you can do."
                builds={dil.builds}
                href={dil.href}
                ctaId="cta.dil.waitlist"
              />
            </div>
          )}

          <div className="mt-4">
            <VentureList ventures={otherVentures} />
          </div>
        </div>
      </section>

      <CtaBand
        headline="Let's build something that lasts."
        primaryCta={{ ctaId: "cta.work" }}
        secondaryCta={{ ctaId: "cta.news", label: "Get the Newsletter" }}
        position="home-final-cta"
      />
    </>
  );
}
