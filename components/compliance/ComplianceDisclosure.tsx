import type { ComplianceBlock } from "@/types/models";

/**
 * Gate 2 of the FS pod's 3-gate enforcement (08-technical.md §3,
 * fs-compliance-architecture memory). Refuses to render anything not
 * `Approved` and unexpired — even if a caller passes it directly — as
 * defence in depth alongside Gate 1 (CI validation in
 * scripts/validate-content.ts) and Gate 3 (scripts/check-fs-expiry.ts).
 * Text renders verbatim, never summarised or truncated.
 */
export function ComplianceDisclosure({ block }: { block: ComplianceBlock }) {
  const { complianceStatus, expiryDate } = block.compliance;
  const isApproved = complianceStatus === "Approved";
  // Intentional build-time check, not a reactive render concern: under
  // Pure SSG this evaluates once per build, and Gate 3
  // (scripts/check-fs-expiry.ts) is what catches an approval expiring
  // *between* builds and triggers a rebuild — see
  // git-native-compliance-workflow memory.
  // eslint-disable-next-line react-hooks/purity
  const isUnexpired = !expiryDate || new Date(expiryDate).getTime() > Date.now();

  if (!isApproved || !isUnexpired) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `ComplianceDisclosure: refused to render "${block.slug}" (status: ${complianceStatus}, expiry: ${expiryDate ?? "none"})`,
      );
    }
    return null;
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-ink">{block.title}</h3>
      <p className="mt-2 whitespace-pre-line text-ink-muted">{block.body}</p>
    </div>
  );
}
