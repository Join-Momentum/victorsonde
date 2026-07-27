import type { Metadata } from "next";
import { ComplianceDisclosure } from "@/components/compliance/ComplianceDisclosure";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { getApprovedDisclosures } from "@/lib/content";

export const metadata: Metadata = {
  title: "Financial Services Disclosures",
  description: "Regulatory disclosures for the Financial Resilience & Protection service.",
};

/**
 * `/legal/financial-disclosures` (02-sitemap.md §5 row 46) — "entirely
 * compliance-owned; renders only ComplianceDisclosure blocks with status
 * Approved... Empty state pre-approval: 'Regulatory information will be
 * published here.'" Quoted verbatim from the spec, not paraphrased,
 * since this is exactly the sentence that's allowed to appear here
 * pre-approval.
 */
export default function FinancialDisclosuresPage() {
  const disclosures = getApprovedDisclosures();

  return (
    <>
      <StructuredData
        data={breadcrumbList([
          { name: "Home", url: "/" },
          { name: "Financial Services Disclosures", url: "/legal/financial-disclosures" },
        ])}
      />
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <div className="max-w-prose">
            <h1 className="text-3xl font-semibold text-ink">Financial Services Disclosures</h1>
            {disclosures.length > 0 ? (
              <div className="mt-8 flex flex-col gap-8">
                {disclosures.map((block) => (
                  <ComplianceDisclosure key={block.slug} block={block} />
                ))}
              </div>
            ) : (
              <p className="mt-8 text-ink-muted">Regulatory information will be published here.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
