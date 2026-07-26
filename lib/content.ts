import type { AnyContent, BuildId, VentureId } from "@/types/models";
import { builds, getBuild } from "@/content/builds";
import { ventures, getVenture } from "@/content/ventures";
import { ctas, getCta } from "@/content/ctas";
import { topics, getTopic } from "@/content/topics";
import { tracks, getTrack } from "@/content/tracks";
import { people, getPerson } from "@/content/people";
import { locations } from "@/content/locations";
import { siteConfig } from "@/content/site";
import { metrics } from "@/content/metrics";
import { testimonials } from "@/content/testimonials";
import { timeline } from "@/content/timeline";
import { videos, clips } from "@/content/videos";
import { books } from "@/content/books";
import { albums } from "@/content/galleries";
import { disclosures } from "@/content/financial/disclosures";

/**
 * Typed content loaders (08-technical.md §2, §5). Every page/component
 * reads content through this module rather than importing content/*
 * files directly, so the relationship-resolution rules
 * (06-content-media.md §1.4) and any future caching live in one place.
 */

// ---------------------------------------------------------------------------
// Direct passthroughs (already typed at the source)
// ---------------------------------------------------------------------------

export function getBuilds() {
  return builds;
}
export { getBuild };

export function getVentures() {
  return ventures;
}
export { getVenture };

/** Ventures whose page is fully live (excludes FS's holding state). */
export function getLiveVentures() {
  return ventures.filter((v) => v.status === "live");
}

export function getCtas() {
  return ctas;
}
export { getCta };

export function getTopics() {
  return topics;
}
export { getTopic };

export function getTracks() {
  return tracks;
}
export { getTrack };

export function getPeople() {
  return people;
}
export { getPerson };

export function getLocations() {
  return locations;
}

export function getSiteConfig() {
  return siteConfig;
}

// ---------------------------------------------------------------------------
// Verified-only collections — callers must not add a fallback/placeholder
// when these return an empty array; render nothing instead (02-sitemap.md §1).
// ---------------------------------------------------------------------------

/** ImpactMetric[], always source+verifiedDate — filter further by builds if needed. */
export function getMetrics(filterBuilds?: BuildId[]) {
  if (!filterBuilds?.length) return metrics;
  return metrics.filter((m) => m.builds.some((b) => filterBuilds.includes(b)));
}

/** Testimonial[] — already permission:true by construction; still guard at call sites. */
export function getTestimonials(ventureRef?: VentureId) {
  const list = testimonials.filter((t) => t.permission);
  return ventureRef ? list.filter((t) => t.ventureRef === ventureRef) : list;
}

export function getTimeline() {
  return timeline;
}

export function getVideos() {
  return videos;
}

export function getClips() {
  return clips;
}

export function getBooks() {
  return books;
}

/** Albums with at least one image — an empty album is hidden, not shown empty. */
export function getAlbums() {
  return albums.filter((a) => a.images.length > 0);
}

/** Only Approved + unexpired disclosure blocks. Gate 1 of 3 — see lib/compliance.ts for Gate 2. */
export function getApprovedDisclosures() {
  const now = Date.now();
  return disclosures.filter((d) => {
    const { complianceStatus, expiryDate } = d.compliance;
    if (complianceStatus !== "Approved") return false;
    if (expiryDate && new Date(expiryDate).getTime() < now) return false;
    return true;
  });
}

// ---------------------------------------------------------------------------
// Relationship resolution — "content is referenced, never copied"
// (06-content-media.md §1.4)
// ---------------------------------------------------------------------------

interface RelatedContentOptions {
  manualOverride?: AnyContent[];
  sharedVentures?: VentureId[];
  sharedInitiatives?: string[];
  sharedTopicOrCategory?: string;
  sharedBuilds?: BuildId[];
  limit?: number;
}

/**
 * Resolves a "Related" block using the fixed precedence order: manual
 * override → shared venture/initiative → shared topic/category → shared
 * Build → recency. Capped at 3–4 items by default.
 */
export function resolveRelatedContent(
  pool: AnyContent[],
  current: AnyContent,
  options: RelatedContentOptions = {},
): AnyContent[] {
  const { manualOverride, sharedVentures, sharedInitiatives, sharedTopicOrCategory, sharedBuilds, limit = 4 } =
    options;

  if (manualOverride?.length) return manualOverride.slice(0, limit);

  const candidates = pool.filter((item) => item.slug !== current.slug);
  const byRecency = (a: AnyContent, b: AnyContent) =>
    new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime();

  const tiers: ((item: AnyContent) => boolean)[] = [
    (item) =>
      !!sharedVentures?.length &&
      !!item.relatedVentures?.some((v) => sharedVentures.includes(v)),
    (item) =>
      !!sharedInitiatives?.length &&
      !!item.relatedInitiatives?.some((i) => sharedInitiatives.includes(i)),
    (item) =>
      !!sharedTopicOrCategory &&
      (item.category === sharedTopicOrCategory || !!item.tags?.includes(sharedTopicOrCategory)),
    (item) => !!sharedBuilds?.length && item.builds.some((b) => sharedBuilds.includes(b)),
  ];

  const picked: AnyContent[] = [];
  const seen = new Set<string>();

  for (const matches of tiers) {
    if (picked.length >= limit) break;
    const tierMatches = candidates.filter((c) => matches(c) && !seen.has(c.slug)).sort(byRecency);
    for (const item of tierMatches) {
      if (picked.length >= limit) break;
      picked.push(item);
      seen.add(item.slug);
    }
  }

  if (picked.length < limit) {
    const rest = candidates.filter((c) => !seen.has(c.slug)).sort(byRecency);
    for (const item of rest) {
      if (picked.length >= limit) break;
      picked.push(item);
      seen.add(item.slug);
    }
  }

  return picked;
}

/** Generic ref resolver: given a list of slugs and a pool, returns the matching items in order. */
export function resolveRefs<T extends { slug: string }>(refs: string[] | undefined, pool: T[]): T[] {
  if (!refs?.length) return [];
  const bySlug = new Map(pool.map((item) => [item.slug, item] as const));
  return refs.map((ref) => bySlug.get(ref)).filter((item): item is T => Boolean(item));
}
