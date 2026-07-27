import { SkipLink } from "@/components/site/SkipLink";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

/**
 * Standard site chrome — every normal page gets this via the (site)
 * route group. Campaign pages (app/c/[slug]/) sit outside this group on
 * purpose, see app/layout.tsx.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
