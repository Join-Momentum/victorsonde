import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { CtaBand } from "@/components/ui/CtaBand";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { leadershipContent } from "@/content/pages/leadership";

export const metadata: Metadata = {
  title: leadershipContent.seo.title,
  description: leadershipContent.seo.metaDescription,
};

/**
 * `/about/leadership` (02-sitemap.md §2 row 5). Tier 2, lightly
 * specified — see content/pages/leadership.ts. `principles` renders
 * nothing while empty rather than inventing operating principles that
 * haven't been written/approved.
 */
export default function LeadershipPage() {
  const { principles } = leadershipContent;

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
            { name: "Leadership Philosophy", url: "/about/leadership" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: leadershipContent.seo.title,
            description: leadershipContent.seo.metaDescription,
            author: { "@type": "Person", name: "Victor Sonde" },
          },
        ]}
      />

      <Hero headline={leadershipContent.hero.headline} primaryCta={leadershipContent.hero.primaryCta} />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <div className="max-w-prose space-y-6">
            {leadershipContent.intro && <p className="text-lg text-ink sm:text-xl">{leadershipContent.intro}</p>}
            <Link href="/insights?type=framework" className="inline-block font-medium text-brand-primary hover:underline">
              Browse published frameworks →
            </Link>
          </div>
        </div>
      </section>

      {principles.length > 0 && (
        <section className="bg-bg-alt">
          <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
            <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">Operating principles</h2>
            <ol className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {principles.map((principle, i) => (
                <li key={principle.title} className="flex flex-col gap-2 bg-surface p-6">
                  <span className="font-utility text-sm text-brand-primary">0{i + 1}</span>
                  <h3 className="text-base font-semibold text-ink">{principle.title}</h3>
                  {principle.body && <p className="text-sm text-ink-muted">{principle.body}</p>}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <CtaBand
        headline="Enquire about advisory."
        primaryCta={{ ctaId: "cta.advisory" }}
        secondaryCta={{ ctaId: "cta.news" }}
        position="leadership-final-cta"
      />
    </>
  );
}
