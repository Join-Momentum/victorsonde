import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { articles } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights — Articles, Frameworks & Ideas",
  description: "Ideas that build people, platforms and institutions — articles, frameworks and essays.",
};

/**
 * `/insights` (02-sitemap.md §3.7). No articles exist yet — see
 * content/insights.ts for why. Filter bar / pagination / "from the
 * channel" / frameworks shelf are left for when there's enough content
 * to filter, rather than built against zero data.
 */
export default function InsightsPage() {
  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Insights", url: "/insights" }])} />

      <Hero
        headline="Ideas that build people, platforms and institutions."
        primaryCta={{ ctaId: "cta.news", href: "#newsletter" }}
      />

      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          {articles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <EmptyState message="Articles are on the way — subscribe to hear when the first ones publish." />
          )}
        </div>
      </section>

      <section id="newsletter" className="bg-bg-alt">
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          <NewsletterForm context="insights" />
        </div>
      </section>
    </>
  );
}
