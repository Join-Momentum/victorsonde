/**
 * Persistent in-page anchor nav under the header (04-design-intelligence-lab.md,
 * "The 34 sections" intro). The site Header (components/site/Header.tsx)
 * is itself `sticky top-0` at `z-(--z-header)` and condenses to a 56px
 * (h-14) bar on scroll — by the time this nav is in view the user has
 * already scrolled past the hero, so the header is reliably in its
 * condensed state. `top-14` matches that condensed height and
 * `z-(--z-sticky)` (< `--z-header`) keeps this nav stacking correctly
 * underneath it rather than both competing for `top-0`.
 */
const baseLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#who-its-for", label: "Who it's for" },
  { href: "#tracks", label: "Tracks" },
  { href: "#journey", label: "The journey" },
  { href: "#get-involved", label: "Get involved" },
];

const faqLink = { href: "#faq", label: "FAQ" };
const applyLink = { href: "#apply", label: "Apply" };

interface DilSubNavProps {
  hasFaq?: boolean;
}

export function DilSubNav({ hasFaq }: DilSubNavProps) {
  const links = [...baseLinks, ...(hasFaq ? [faqLink] : []), applyLink];

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-14 z-(--z-sticky) border-b border-border bg-surface/95 backdrop-blur"
    >
      <ul className="mx-auto flex max-w-wide gap-6 overflow-x-auto px-6 py-3 text-sm">
        {links.map((link) => (
          <li key={link.href} className="shrink-0">
            <a href={link.href} className="font-medium text-ink-muted hover:text-ink">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
