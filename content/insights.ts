import type { Article } from "@/types/models";

/**
 * Placeholder in-memory article list. The real pipeline described in
 * content/insights/README.md — MDX files parsed via lib/mdx.ts, frontmatter
 * validated against the Article type — isn't built yet (no MDX compiler is
 * wired into this repo). This empty array is what the hub/detail routes
 * read today so the page architecture works and is ready to swap for the
 * real MDX loader without changing any component. Phase 1 needs ≥6 launch
 * articles before this hub is really "live" (10-quality-and-launch.md §4).
 */
export const articles: Article[] = [];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
