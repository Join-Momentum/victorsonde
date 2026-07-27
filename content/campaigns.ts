import type { Campaign } from "@/types/models";

/**
 * No campaign has been commissioned yet — this is the template's data
 * source, ready for the first real one. Each campaign is one page, one
 * action (02-sitemap.md §3.10); don't add a campaign here speculatively.
 */
export const campaigns: Campaign[] = [];

export function getCampaign(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug);
}
