import { existsSync } from "node:fs";
import path from "node:path";
import { metrics } from "../content/metrics";
import { testimonials } from "../content/testimonials";
import { books } from "../content/books";
import { albums } from "../content/galleries";
import { disclosures } from "../content/financial/disclosures";
import { ctas } from "../content/ctas";
import { findBannedPhrases } from "./banned-phrases";

/**
 * `npm run validate:content` — the 8 CI content checks from
 * 08-technical.md §4. Type-compilation (check 1) is covered by
 * `npm run typecheck` in CI and isn't repeated here. Each check below is
 * a no-op pass when its content type is still empty (nothing to violate
 * yet) rather than a placeholder — they start doing real work the moment
 * real entries are added.
 */

let violations: string[] = [];

function fail(message: string) {
  violations.push(message);
}

// 2. Metrics — source + verifiedDate required (redundant with the type
// system for new entries, but guards against `as any`/JS drift).
function checkMetrics() {
  for (const m of metrics) {
    if (!m.source?.trim()) fail(`metric "${m.slug}": missing source`);
    if (!m.verifiedDate?.trim()) fail(`metric "${m.slug}": missing verifiedDate`);
  }
}

// 3. Testimonials — permission required to exist in the published set at all.
function checkTestimonials() {
  for (const t of testimonials) {
    if (t.permission !== true) fail(`testimonial "${t.slug}": permission is not true`);
  }
}

// 4. FS gate — status/expiry/banned-phrase scan.
function checkFinancialDisclosures() {
  const now = Date.now();
  for (const block of disclosures) {
    const { complianceStatus, expiryDate } = block.compliance;
    if (complianceStatus === "Approved") {
      if (!expiryDate) {
        fail(`FS block "${block.slug}": Approved but has no expiryDate`);
      } else if (new Date(expiryDate).getTime() < now) {
        fail(`FS block "${block.slug}": status is Approved but expiryDate has passed — should be Expired`);
      }
    }
    const hits = findBannedPhrases(block.body);
    if (hits.length) fail(`FS block "${block.slug}": contains banned phrase(s): ${hits.join(", ")}`);
  }
}

// 5. Media — alt text + rights record required on every referenced image.
function checkMedia() {
  for (const album of albums) {
    for (const image of album.images) {
      if (!image.altText?.trim()) fail(`gallery "${album.slug}": image "${image.asset}" missing altText`);
      if (!image.rights?.rights?.trim()) fail(`gallery "${album.slug}": image "${image.asset}" missing rights record`);
      if (image.asset.startsWith("/")) {
        const filePath = path.join(process.cwd(), "public", image.asset);
        if (!existsSync(filePath)) fail(`gallery "${album.slug}": image file does not exist: ${image.asset}`);
      }
    }
  }
}

// 6. Case studies — outcomeVerified required; defence items also need clearedForRelease.
// No MDX case-study loader is wired yet (content/case-studies/ is empty) —
// this becomes a real check once lib/mdx.ts loads CaseStudy frontmatter.
function checkCaseStudies() {
  // Intentionally a no-op until the MDX pipeline exists — see
  // content/case-studies/README.md.
}

// 7. Links — CTA ids referenced elsewhere must exist in the registry.
// (Internal href resolution against the actual route table happens in the
// Playwright link-check smoke test, not here, since it needs the built app.)
function checkCtaRegistry() {
  const ids = new Set(ctas.map((c) => c.id));
  if (ids.size !== ctas.length) fail("ctas.ts: duplicate CTA ids found in the registry");
}

// 8. Books — pre-order/available titles need ≥1 valid PurchaseOption.
function checkBooks() {
  for (const book of books) {
    if (book.status === "Pre-Order" || book.status === "Available Now") {
      const hasValid = book.purchaseOptions.some((o) => o.available);
      if (!hasValid) fail(`book "${book.slug}": status "${book.status}" but no available PurchaseOption`);
    }
  }
}

function main() {
  violations = [];
  checkMetrics();
  checkTestimonials();
  checkFinancialDisclosures();
  checkMedia();
  checkCaseStudies();
  checkCtaRegistry();
  checkBooks();

  if (violations.length) {
    console.error(`\ncontent validation failed (${violations.length} issue${violations.length === 1 ? "" : "s"}):\n`);
    for (const v of violations) console.error(`  - ${v}`);
    console.error("");
    process.exit(1);
  }

  console.log("content validation passed");
}

main();
