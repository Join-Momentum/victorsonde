import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { BuildStrip } from "@/components/home/BuildStrip";
import { RoleGrid } from "@/components/about/RoleGrid";
import { VentureCard } from "@/components/cards/VentureCard";
import { TestimonialSection } from "@/components/ui/Testimonial";
import { CtaBand } from "@/components/ui/CtaBand";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { aboutContent } from "@/content/pages/about";
import { getVentures, getBuilds, getTestimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.metaDescription,
};

/**
 * `/about` (02-sitemap.md §3.1). Sections omitted pending real content:
 * photo band (no photography yet), selected recognition (doc says omit
 * if none verified), personal note ([VERIFIED CONTENT REQUIRED]) — see
 * content/pages/about.ts for the full reasoning per section.
 */
export default function AboutPage() {
  const ventures = getVentures();
  const builds = getBuilds();
  const testimonials = getTestimonials();

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: aboutContent.seo.title,
            description: aboutContent.seo.metaDescription,
            mainEntity: {
              "@type": "Person",
              name: "Victor Sonde",
            },
          },
        ]}
      />

      <Hero
        headline={aboutContent.hero.headline}
        supportingCopy={aboutContent.hero.supportingCopy}
        primaryCta={aboutContent.hero.primaryCta}
        secondaryCta={aboutContent.hero.secondaryCta}
      />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <div className="lg:grid lg:grid-cols-[0.9fr_2fr] lg:gap-16">
            <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">The thesis</h2>
            <div className="mt-6 max-w-prose space-y-6 lg:mt-0">
              {aboutContent.thesis.map((paragraph, i) =>
                i === 0 ? (
                  <p key={i} className="text-2xl leading-snug font-medium text-ink sm:text-3xl">
                    {paragraph}
                  </p>
                ) : (
                  <p key={i} className="text-lg text-ink opacity-80">
                    {paragraph}
                  </p>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <BuildStrip builds={builds} />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Roles at a glance</h2>
          <div className="mt-6">
            <RoleGrid roles={aboutContent.roles} />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">The ventures</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ventures.map((venture) => (
              <VentureCard
                key={venture.id}
                title={venture.name}
                purposeLine={venture.oneLiner}
                builds={venture.builds}
                href={venture.href}
                statusLabel={venture.status === "holding" ? "Coming soon" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection testimonials={testimonials} heading="What people say" />

      <CtaBand
        headline="Let's build something that lasts."
        primaryCta={{ ctaId: "cta.work" }}
        secondaryCta={{ ctaId: "cta.news", label: "Get the Newsletter" }}
        position="about-final-cta"
      />
    </>
  );
}
