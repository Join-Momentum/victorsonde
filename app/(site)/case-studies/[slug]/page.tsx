import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { caseStudies, getCaseStudy } from "@/content/case-studies-index";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  return { title: cs?.title ?? "Case Study" };
}

/** `/case-studies/[slug]` (06-content-media.md §4.8). `outcomeVerified: true` gates publish. */
export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs || !cs.outcomeVerified) notFound();

  return (
    <>
      <StructuredData
        data={breadcrumbList([
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
          { name: cs.title, url: `/case-studies/${cs.slug}` },
        ])}
      />
      <article className="mx-auto max-w-prose px-6 py-16 sm:py-24">
        <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{cs.title}</h1>
        <p className="mt-4 text-ink-muted">{cs.clientContext}</p>

        <h2 className="mt-8 text-xl font-semibold text-ink">Challenge</h2>
        <p className="mt-2 text-ink opacity-80">{cs.challenge}</p>

        <h2 className="mt-8 text-xl font-semibold text-ink">Approach</h2>
        <p className="mt-2 text-ink opacity-80">{cs.approach}</p>

        {cs.outcomeMetrics.length > 0 && (
          <>
            <h2 className="mt-8 text-xl font-semibold text-ink">Outcome</h2>
            <ul className="mt-2 flex flex-col gap-1 text-ink opacity-80">
              {cs.outcomeMetrics.map((metric) => (
                <li key={metric.slug}>
                  {metric.value}
                  {metric.unit} — {metric.label}
                </li>
              ))}
            </ul>
          </>
        )}
      </article>
    </>
  );
}
