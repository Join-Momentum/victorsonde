import Link from "next/link";
import type { Article } from "@/types/models";

/** 07-design-system.md §5.13. Whole-card link via the stretched-link pattern. */
export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group relative flex flex-col gap-2 rounded-lg border border-border bg-surface p-6">
      {article.category && (
        <span className="text-xs font-semibold tracking-wide text-brand-primary uppercase">{article.category}</span>
      )}
      <h3 className="text-lg font-semibold text-ink">
        <Link href={`/insights/${article.slug}`} className="after:absolute after:inset-0">
          {article.title}
        </Link>
      </h3>
      {article.excerpt && <p className="text-sm text-ink-muted">{article.excerpt}</p>}
      {article.readingTime && <p className="text-xs text-ink-muted">{article.readingTime} min read</p>}
    </article>
  );
}
