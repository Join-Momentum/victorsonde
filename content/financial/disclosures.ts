import type { ComplianceBlock } from "@/types/models";

/**
 * FS pod — quarantined (05-key-pages.md §4, 08-technical.md §3).
 * Empty until compliance supplies and approves real regulatory text
 * (authorised firm name, FCA reference, AR disclosure, risk warning,
 * complaints procedure). NEVER draft plausible-sounding entries here —
 * every block must reach `complianceStatus: "Approved"` via the real
 * compliance workflow (see content/financial/APPROVALS.md), and Gate 1
 * (CI), Gate 2 (ComplianceDisclosure render guard) and Gate 3 (nightly
 * expiry check) all depend on that status being genuine.
 */
export const disclosures: ComplianceBlock[] = [];
