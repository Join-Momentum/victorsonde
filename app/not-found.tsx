import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

/**
 * 02-sitemap.md §5 (404). `404_view {path, referrer}` fires from a client
 * component once one exists to read the path — Next's not-found.tsx is a
 * Server Component boundary with no access to the request path directly.
 * Search is intentionally not included yet: Pagefind indexes the build,
 * but the dedicated /search results page is Phase 3 work
 * (PROJECT-CHECKLIST.md §4c) — wiring a one-off search box here ahead of
 * that page existing would have nowhere useful to send results.
 */
export default function NotFound() {
  return (
    <section className="flex flex-1 items-center">
      <div className="mx-auto max-w-wide px-6 py-24 text-center sm:py-32">
        <p className="font-utility text-sm text-brand-primary">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
          That page isn&apos;t here — the work is.
        </h1>
        <p className="mt-4 text-lg text-ink-muted">
          The link may be out of date, or the page hasn&apos;t been built yet.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">Home</Button>
          <Button href="/portfolio" variant="ghost">
            Impact Portfolio
          </Button>
          <Button href="/ventures" variant="ghost">
            Ventures
          </Button>
          <Button href="/contact" variant="ghost">
            Contact
          </Button>
        </div>

        <p className="mt-10 text-sm text-ink-muted">
          Or start from the <Link href="/about" className="text-brand-primary hover:underline">About</Link> page.
        </p>
      </div>
    </section>
  );
}
