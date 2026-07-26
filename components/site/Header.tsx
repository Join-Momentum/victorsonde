"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Logo } from "@/components/site/Logo";
import { CtaLink } from "@/components/ui/CtaLink";
import { NavDrawer } from "@/components/site/NavDrawer";
import { siteConfig } from "@/content/site";
import { ventures } from "@/content/ventures";

/**
 * Header (07-design-system.md §5.1) — collapsed-by-default on every
 * breakpoint (confirmed decision overriding the doc's always-visible
 * horizontal nav; see the design-direction/IA memory notes). Condenses
 * height on scroll without layout shift.
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/*
        NavDrawer is rendered as a SIBLING below, not nested inside this
        header — `backdrop-blur` (backdrop-filter) makes an element the
        containing block for `position: fixed` descendants, which broke
        the drawer's full-height `inset-y-0` (it was resolving against the
        72px header instead of the viewport). Keep it that way.
      */}
      <header
        className={clsx(
          "sticky top-0 z-(--z-header) w-full border-b bg-surface/95 backdrop-blur",
          "transition-[height,box-shadow] duration-(--dur-base)",
          isScrolled ? "h-14 border-border shadow-1" : "h-18 border-transparent",
        )}
      >
        <div className="mx-auto flex h-full max-w-wide items-center justify-between gap-4 px-6">
          <Logo priority />
          <div className="flex items-center gap-3">
            <CtaLink ctaId="cta.work" position="header" size="sm" className="hidden sm:inline-flex" />
            <button
              ref={triggerRef}
              type="button"
              aria-expanded={isOpen}
              aria-controls="primary-nav-drawer"
              onClick={() => setIsOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-bg-alt"
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <NavDrawer
        id="primary-nav-drawer"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        nav={siteConfig.nav}
        ventures={ventures}
        social={siteConfig.social}
        triggerRef={triggerRef}
      />
    </>
  );
}
