import type { ImpactMetric } from "@/types/models";

/**
 * ImpactMetric[] — every entry requires `source` + `verifiedDate`
 * (validated in scripts/validate-content.ts). Empty until a real,
 * sourced metric is supplied — sections consuming this list must render
 * nothing when it's empty, never placeholder numbers (03-homepage.md §12).
 */
export const metrics: ImpactMetric[] = [];
