import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Financial Resilience & Protection",
  description: "Understanding financial risk. Protecting what matters.",
};

/**
 * `/financial-resilience` — quarantined FS pod (05-key-pages.md §4,
 * fs-compliance-architecture memory). Ships as a deliberate holding
 * state, per Phase 1 guidance ("FS = holding state unless approvals
 * exist" — 10-quality-and-launch.md §4). content/financial/disclosures.ts
 * is empty, so:
 *
 * - The hero uses ONLY the pre-approved lexicon from 01-strategy.md §2.5
 *   / 05-key-pages.md §4.1 ("financial resilience," "protecting what
 *   matters," etc.) — nothing beyond that vocabulary.
 * - The consultation form is deliberately NOT rendered — not an
 *   oversight. Its regulatory consent wording is itself
 *   [COMPLIANCE INPUT REQUIRED]; collecting personal data through a form
 *   with unapproved consent language would be a real compliance risk,
 *   not just a content gap. Build it once that wording is supplied.
 * - No newsletter capture here — FS pipeline stays isolated from
 *   cross-venture nurture per 01-strategy.md.
 * - Schema is plain WebPage, not Service, until compliance approves any
 *   service description (02-sitemap.md §2 row 20).
 */
export default function FinancialResiliencePage() {
  return (
    <>
      <StructuredData
        data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Financial Resilience & Protection", url: "/financial-resilience" }])}
      />

      <Hero headline="Understanding financial risk. Protecting what matters." />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <div className="max-w-prose space-y-4">
            <p className="text-ink opacity-80">
              This section is being finalised with compliance review before it publishes in full — including how an
              introductory conversation works and the regulatory information that governs it.
            </p>
            <p>
              <Link href="/legal/financial-disclosures" className="font-medium text-brand-primary hover:underline">
                Financial Services Disclosures →
              </Link>
            </p>
            <p>
              In the meantime,{" "}
              <Link href="/contact" className="font-medium text-brand-primary hover:underline">
                get in touch
              </Link>{" "}
              and we&apos;ll follow up once this is ready.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
