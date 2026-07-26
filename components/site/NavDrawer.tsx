"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import type { SiteConfig } from "@/types/models";
import type { Venture } from "@/types/models";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * The single nav surface used at every breakpoint — collapsed by default
 * everywhere per the confirmed design decision (overrides the
 * always-visible-horizontal-bar pattern in 07-design-system.md §2.1).
 * Content and DOM structure follow the mobile drawer spec (§2.3) —
 * focus-trapped, scroll-locked, Esc closes — applied universally instead
 * of only below `lg`.
 *
 * The panel is always rendered (not conditionally mounted) so nav links
 * stay crawlable and screen-reader-discoverable; `inert` + CSS handle the
 * closed state without removing anything from the DOM.
 */
interface NavDrawerProps {
  id?: string;
  open: boolean;
  onClose: () => void;
  nav: SiteConfig["nav"];
  ventures: Venture[];
  social: SiteConfig["social"];
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function NavDrawer({ id, open, onClose, nav, ventures, social, triggerRef }: NavDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const firstFocusable = panel?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    firstFocusable?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusables = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, triggerRef]);

  return (
    <>
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className={clsx(
          "fixed inset-0 z-(--z-overlay) bg-brand-dark/40 transition-opacity duration-(--dur-base)",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <div
        id={id}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        inert={!open}
        className={clsx(
          "fixed inset-y-0 right-0 z-(--z-modal) flex w-full max-w-sm flex-col overflow-y-auto",
          "bg-surface shadow-3 transition-transform duration-(--dur-base) ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <span className="text-sm font-medium text-ink-muted">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-bg-alt"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" aria-hidden="true">
              <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-6 py-4" aria-label="Primary">
          <ul className="flex flex-col gap-1">
            {nav.map((item) =>
              item.label === "Ventures" ? (
                <li key={item.href}>
                  <details className="group py-2">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-base font-medium text-ink">
                      {item.label}
                      <Chevron />
                    </summary>
                    <ul className="mt-1 flex flex-col gap-1 border-l border-border pl-4">
                      {ventures.map((v) => (
                        <li key={v.id}>
                          <Link href={v.href} className="block py-2 text-sm text-ink-muted hover:text-ink">
                            {v.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/portfolio" className="block py-2 text-sm font-medium text-brand-primary">
                          How it all connects →
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
              ) : item.children?.length ? (
                <li key={item.href}>
                  <details className="group py-2">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-base font-medium text-ink">
                      {item.label}
                      <Chevron />
                    </summary>
                    <ul className="mt-1 flex flex-col gap-1 border-l border-border pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block py-2 text-sm text-ink-muted hover:text-ink">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="block py-3 text-base font-medium text-ink">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex flex-col gap-4 border-t border-border px-6 py-4">
          <CtaLink ctaId="cta.work" position="nav-drawer" className="w-full" />
          {social.length > 0 && (
            <ul className="flex items-center gap-4">
              {social.map((s) => (
                <li key={s.platform}>
                  <a href={s.url} className="text-sm text-ink-muted hover:text-ink">
                    {s.platform}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 text-ink-muted transition-transform duration-(--dur-fast) group-open:rotate-180"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}
