import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { TestimonialSection } from "@/components/ui/Testimonial";
import { EnquiryWizard } from "@/components/forms/EnquiryWizard";
import { StructuredData, breadcrumbList, faqPageSchema } from "@/components/seo/StructuredData";
import { topics } from "@/content/topics";
import { speakingRoute } from "@/content/routes/speaking";
import { toClientRoute } from "@/content/routes";
import { getTestimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book Victor Sonde — Keynote Speaker & Facilitator",
  description:
    "Keynote speaker and facilitator on evidence-based employability, AI-era organisations, African innovation and transformative leadership.",
};

const faqItems = [
  { q: "What are your fees?", a: "Fees vary by format, location and audience — get in touch with your event details for a quote." },
  { q: "Do you travel internationally?", a: "Yes — share your location and format when you enquire." },
  { q: "Can sessions be recorded?", a: "Depends on the event — flag your recording requirements in the enquiry form." },
  { q: "How far in advance should we book?", a: "The earlier the better, especially for a specific date — flexible dates have more availability." },
];

/** `/speaking` (05-key-pages.md §3). */
export default function SpeakingPage() {
  const testimonials = getTestimonials();

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([{ name: "Home", url: "/" }, { name: "Speaking", url: "/speaking" }]),
          { "@context": "https://schema.org", "@type": "Person", name: "Victor Sonde" },
          faqPageSchema(faqItems),
        ]}
      />

      <Hero
        headline="Talks that turn potential into proof."
        supportingCopy="Keynote speaker and facilitator on evidence-based employability, AI-era organisations, African innovation and transformative leadership."
        primaryCta={{ ctaId: "cta.speaking", href: "#enquire" }}
      />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <div className="max-w-prose space-y-4">
            <h2 className="text-xl font-semibold text-ink">Who this is for</h2>
            <p className="text-ink opacity-80">
              Executives, policymakers, educators and young professionals looking for a talk grounded in systems
              thinking and evidence — not motivational cliché.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Signature topics</h2>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, i) => (
              <li key={topic.slug} className="bg-surface p-5">
                <span className="font-utility text-xs text-brand-primary">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 font-medium text-ink">{topic.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TestimonialSection testimonials={testimonials} heading="What organisers say" />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">FAQ</h2>
          <div className="mt-6">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section id="enquire" className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Enquire about booking</h2>
          <div className="mt-8 max-w-xl">
            <EnquiryWizard route={toClientRoute(speakingRoute)} />
          </div>
        </div>
      </section>
    </>
  );
}
