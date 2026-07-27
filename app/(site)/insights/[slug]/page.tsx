import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { articles, getArticle } from "@/content/insights";

/**
 * `/insights/[slug]` (02-sitemap.md §4.3). Generates zero static paths
 * until content/insights.ts has real entries (via the MDX pipeline once
 * it's built — see content/insights/README.md) — that's correct for
 * pure SSG with no content, not a bug.
 */
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return { title: article?.seo.title ?? "Article", description: article?.seo.metaDescription };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "Insights", url: "/insights" },
            { name: article.title, url: `/insights/${article.slug}` },
          ]),
          { "@context": "https://schema.org", "@type": "Article", headline: article.title },
        ]}
      />
      <article className="mx-auto max-w-prose px-6 py-16 sm:py-24">
        <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{article.title}</h1>
        <div className="prose mt-8">{article.body}</div>
      </article>
    </>
  );
}
