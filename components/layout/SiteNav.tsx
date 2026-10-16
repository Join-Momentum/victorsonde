"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/buttonClasses";
import { mainNav, primaryCta } from "@/content/navigation";
import { cn } from "@/lib/cn";
import { images } from "@/lib/images";

/** Sticky site header: logo, primary links with active state, and the mobile menu (below 1280px). */
export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [panelTop, setPanelTop] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const close = () => setOpen(false);

  const toggle = () => {
    // The panel fills the viewport below the nav, whose offset depends on whether the topbar is still showing.
    if (!open && navRef.current) setPanelTop(navRef.current.getBoundingClientRect().bottom);
    setOpen((o) => !o);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape, and close if the viewport grows to desktop.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 1281px)");
    const onDesktop = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      root.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <nav
      ref={navRef}
      style={{ viewTransitionName: "site-nav" }}
      className={cn(
        "sticky top-0 z-60 border-b bg-white/85 backdrop-blur-xl backdrop-saturate-150 transition-[border-color,box-shadow] duration-300",
        scrolled ? "border-paper-2 shadow-[0_8px_30px_-18px_rgba(36,26,24,.35)]" : "border-transparent",
      )}
    >
      <Container size="wide" className="flex h-(--nav-h) items-center gap-8">
        <Link href="/" onClick={close} className="flex flex-none items-center no-underline">
          <Image src={images.logoPrimary} alt="Victor Sonde" priority className="h-[34px] w-auto" />
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="navlinks"
          onClick={toggle}
          className="ml-auto inline-flex items-center gap-2.5 rounded-full border border-paper-2 px-4 py-2.5 font-mono text-[.7rem] uppercase tracking-[.14em] transition-colors hover:border-fg/40 min-[1281px]:hidden"
        >
          <span aria-hidden className="grid gap-[3px]">
            <span className={cn("block h-px w-3.5 bg-current transition duration-300", open && "translate-y-1 rotate-45")} />
            <span className={cn("block h-px w-3.5 bg-current transition duration-300", open && "opacity-0")} />
            <span className={cn("block h-px w-3.5 bg-current transition duration-300", open && "-translate-y-1 -rotate-45")} />
          </span>
          {open ? "Close" : "Menu"}
        </button>

        <div
          id="navlinks"
          style={{ "--panel-top": `${panelTop}px` } as CSSProperties}
          className={cn(
            "absolute inset-x-0 top-full flex h-[calc(100dvh-var(--panel-top))] flex-col overflow-y-auto overscroll-contain border-t border-paper-2 bg-white px-(--gut) pb-8 pt-2",
            "transition-[opacity,translate,visibility] duration-300 ease-out-soft",
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
            "min-[1281px]:visible min-[1281px]:static min-[1281px]:ml-auto min-[1281px]:h-auto min-[1281px]:translate-y-0 min-[1281px]:flex-row min-[1281px]:items-center min-[1281px]:gap-6 min-[1281px]:overflow-visible min-[1281px]:border-0 min-[1281px]:bg-transparent min-[1281px]:p-0 min-[1281px]:opacity-100 min-[1281px]:transition-none",
          )}
        >
          {mainNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex-none whitespace-nowrap border-b border-paper-2 py-3 font-display text-[1.3rem] font-semibold tracking-[-.01em] no-underline transition-colors",
                  "min-[1281px]:border-0 min-[1281px]:py-2 min-[1281px]:text-[.9rem] min-[1281px]:font-medium",
                  "min-[1281px]:after:absolute min-[1281px]:after:inset-x-0 min-[1281px]:after:-bottom-0.5 min-[1281px]:after:h-[2px] min-[1281px]:after:origin-left min-[1281px]:after:transition-transform min-[1281px]:after:duration-300",
                  active
                    ? "text-orange-ink min-[1281px]:text-fg min-[1281px]:after:scale-x-100 min-[1281px]:after:bg-fg"
                    : "text-fg/70 hover:text-fg min-[1281px]:after:scale-x-0 min-[1281px]:after:bg-orange min-[1281px]:hover:after:scale-x-100",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={primaryCta.href}
            onClick={close}
            className={buttonClasses("primary", "sm", "mt-6 flex-none justify-center min-[1281px]:ml-2 min-[1281px]:mt-0")}
          >
            {primaryCta.label}
          </Link>
        </div>
      </Container>
    </nav>
  );
}
