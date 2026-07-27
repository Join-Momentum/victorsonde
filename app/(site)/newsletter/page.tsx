import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { TestimonialSection } from "@/components/ui/Testimonial";
import { EmptyState } from "@/components/ui/EmptyState";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { getTestimonials } from "@/lib/content";

export const metadata: Metadata = { title: "The Newsletter", description: "Frameworks, essays and updates across the portfolio." };

/**
 * `/newsletter` (06-content-media.md §4.7). No editions exist yet — no
 * NewsletterEdition content type has any entries — and cadence isn't
 * committed to yet ([VERIFIED CONTENT REQUIRED]), so the hero doesn't
 * promise a specific frequency.
 */
export default function NewsletterPage() {
  const testimonials = getTestimonials();

  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Newsletter", url: "/newsletter" }])} />

      <Hero headline="Ideas worth building on." supportingCopy="Frameworks, essays and what's happening across the portfolio." />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Archive</h2>
          <div className="mt-6">
            <EmptyState message="The first edition hasn't gone out yet — subscribe to get it when it does." />
          </div>
        </div>
      </section>

      <TestimonialSection testimonials={testimonials} heading="What readers say" />

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <NewsletterForm context="newsletter-page" />
        </div>
      </section>
    </>
  );
}
