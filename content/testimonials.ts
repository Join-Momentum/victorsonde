import type { Testimonial } from "@/types/models";

/**
 * Testimonial[] — every entry requires `permission: true` to render
 * anywhere (validated in scripts/validate-content.ts). Empty until real,
 * permissioned quotes are supplied — the Testimonial component renders
 * nothing when this list has no matching entries, never a placeholder.
 */
export const testimonials: Testimonial[] = [];
