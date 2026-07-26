import type { Track } from "@/types/models";

/**
 * The 13 Design Intelligence Lab domain tracks (04-design-intelligence-lab.md §12).
 * Names are fixed by spec; challenge framing/teaser copy is written per
 * track closer to cohort launch — left undefined rather than invented.
 */
export const tracks: Track[] = [
  { slug: "employment", name: "Employment" },
  { slug: "entrepreneurship", name: "Entrepreneurship" },
  { slug: "public-service", name: "Public service" },
  { slug: "education", name: "Education" },
  { slug: "healthcare", name: "Healthcare" },
  { slug: "financial-inclusion", name: "Financial inclusion" },
  { slug: "climate", name: "Climate" },
  { slug: "sustainability", name: "Sustainability" },
  { slug: "technology", name: "Technology" },
  { slug: "community-resilience", name: "Community resilience" },
  { slug: "creative-industries", name: "Creative industries" },
  { slug: "future-cities", name: "Future cities" },
  { slug: "defence-national-security", name: "Defence & national security" },
];

export function getTrack(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}
