"use client";

import { useEffect, useState } from "react";
import { EnquiryWizard, type ClientLeadRoute } from "@/components/forms/EnquiryWizard";
import { cn } from "@/lib/cn";

/**
 * §31–34 — sponsor / challenge / mentor / city are 4 distinct pipelines
 * but don't need 4 stacked full-page form sections to stay distinct; a
 * tab switcher keeps every anchor (#sponsor #challenge #mentor #city)
 * working (each CTA's registry href still lands on the right tab via the
 * URL hash) while only ever showing one form at a time.
 */
interface FormTab {
  id: string;
  label: string;
  route: ClientLeadRoute;
}

interface FormTabsProps {
  tabs: FormTab[];
}

export function FormTabs({ tabs }: FormTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0].id);

  useEffect(() => {
    // One-off read from window.location on mount — not available during
    // SSR, so it can't be derived at render time (same pattern as
    // EnquiryWizard's sessionStorage restore).
    const fromHash = window.location.hash.replace("#", "");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (tabs.some((t) => t.id === fromHash)) setActiveId(fromHash);
  }, [tabs]);

  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <div>
      <div role="tablist" aria-label="Ways to get involved" className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={tab.id}
            type="button"
            role="tab"
            aria-selected={tab.id === activeId}
            aria-controls="dil-form-panel"
            onClick={() => setActiveId(tab.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-(--dur-fast)",
              tab.id === activeId
                ? "border-brand-primary bg-brand-primary-tint text-brand-dark"
                : "border-border text-ink hover:bg-bg-alt",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div id="dil-form-panel" role="tabpanel" className="mt-8 max-w-xl">
        <EnquiryWizard key={active.id} route={active.route} />
      </div>
    </div>
  );
}
