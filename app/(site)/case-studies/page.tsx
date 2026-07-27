import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { caseStudies } from "@/content/case-studies-index";

export const metadata: Metadata = { title: "Case Studies", description: "Structured, verified proof of the work across the portfolio." };

export default function CaseStudiesPage() {
  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Case Studies", url: "/case-studies" }])} />
      <Hero headline="Case Studies" />
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          {caseStudies.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((cs) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} />
              ))}
            </div>
          ) : (
            <EmptyState message="Verified case studies are in progress and will publish here." actionLabel="See the ventures" actionHref="/ventures" />
          )}
        </div>
      </section>
    </>
  );
}
