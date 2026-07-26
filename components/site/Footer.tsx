import Link from "next/link";
import { Logo } from "@/components/site/Logo";
import { siteConfig } from "@/content/site";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

/**
 * Footer (03-homepage.md §26, 07-design-system.md §5.12) — full site
 * index + fallback conversion + legal. Columns are content-driven from
 * content/site.ts, not hand-duplicated here.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-bg-alt">
      <div className="mx-auto max-w-wide px-6 py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo />
          </div>
          {siteConfig.footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-sm font-semibold text-ink">{column.title}</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink-muted hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <NewsletterForm context="footer" />
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-muted">
            {/* [VERIFIED CONTENT REQUIRED: legal entity name(s)] */}
            &copy; {year} Victor Sonde. All rights reserved.
          </p>
          {siteConfig.social.length > 0 && (
            <ul className="flex items-center gap-4">
              {siteConfig.social.map((s) => (
                <li key={s.platform}>
                  <a href={s.url} className="text-xs text-ink-muted hover:text-ink">
                    {s.platform}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <a href="#top" className="text-xs font-medium text-ink-muted hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
