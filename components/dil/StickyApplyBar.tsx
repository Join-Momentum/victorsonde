"use client";

import { CtaLink } from "@/components/ui/CtaLink";
import type { ProgrammeState } from "@/types/models";

/**
 * Sticky mobile bottom CTA (04-design-intelligence-lab.md — "Sticky mobile
 * bottom CTA: yes"). State-driven per the page-level programmeState
 * machine, same as the hero and §30 apply section. Safe-area padding keeps
 * it clear of iOS home-indicator gestures (acceptance criterion 6).
 */
interface StickyApplyBarProps {
  programmeState: ProgrammeState;
}

export function StickyApplyBar({ programmeState }: StickyApplyBarProps) {
  const isOpen = programmeState === "applications_open";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-(--z-sticky) border-t border-border bg-surface p-4 lg:hidden"
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <CtaLink
        ctaId={isOpen ? "cta.dil.apply" : "cta.dil.waitlist"}
        position="dil-sticky-mobile"
        className="w-full justify-center"
      />
    </div>
  );
}
