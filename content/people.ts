import type { PersonRef } from "@/types/models";

/**
 * PersonRef[] — Victor plus mentors/collaborators (each needs `permission`
 * before rendering). Victor's role line is drawn from the roles-at-a-glance
 * list in 05-key-pages.md §3.1 (About page spec); photo is
 * [MEDIA REQUIRED], full bio is [VERIFIED CONTENT REQUIRED].
 */
export const people: PersonRef[] = [
  {
    slug: "victor-sonde",
    name: "Victor Sonde",
    role: "Entrepreneur, transformation leader and institution builder",
    permission: true,
  },
];

export function getPerson(slug: string): PersonRef | undefined {
  return people.find((p) => p.slug === slug);
}
