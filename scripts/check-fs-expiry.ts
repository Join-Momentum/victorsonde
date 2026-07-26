import { disclosures } from "../content/financial/disclosures";

/**
 * Gate 3 of the FS compliance architecture (08-technical.md §3): scheduled
 * daily entry point (.github/workflows/fs-expiry.yml). If any Approved
 * block has passed its expiryDate, this should open an urgent issue and
 * trigger a rebuild so Gate 2 (ComplianceDisclosure.tsx) removes it from
 * production within 24h. Issue-creation/rebuild-trigger wiring is left for
 * when the FS pod has real content — see content/financial/disclosures.ts.
 */
function main() {
  const now = Date.now();
  const expired = disclosures.filter((d) => {
    if (d.compliance.complianceStatus !== "Approved") return false;
    if (!d.compliance.expiryDate) return false;
    return new Date(d.compliance.expiryDate).getTime() < now;
  });

  if (expired.length === 0) {
    console.log("fs-expiry check: no expired approvals");
    return;
  }

  console.error(`fs-expiry check: ${expired.length} expired approval(s) found:`);
  for (const block of expired) {
    console.error(`  - ${block.slug} (expired ${block.compliance.expiryDate})`);
  }
  // TODO once the FS pod has real content: open a GitHub issue via the
  // Actions GITHUB_TOKEN and trigger a Vercel rebuild hook.
  process.exit(1);
}

main();
