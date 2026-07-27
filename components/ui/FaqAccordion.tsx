"use client";

import { useState } from "react";
import { trackDynamic } from "@/lib/analytics";

/**
 * 07-design-system.md §5.8. `allowMultiple` defaults to true — the spec
 * explicitly warns against forcing single-open ("no forced single-open
 * for keyboard users' context loss"). The FAQPage JSON-LD rendered
 * alongside this (via seo/StructuredData's `faqPageSchema`) must be built
 * from the same `items` array passed here, so the two can't drift.
 */
interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
}

export function FaqAccordion({ items, allowMultiple = true }: FaqAccordionProps) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  function toggle(index: number, question: string) {
    setOpenSet((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
        trackDynamic("faq_open", { question });
      }
      return next;
    });
  }

  return (
    <div className="divide-y divide-border border-t border-b border-border">
      {items.map((item, i) => {
        const isOpen = openSet.has(i);
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => toggle(i, item.q)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-medium text-ink">{item.q}</span>
                <span aria-hidden="true" className="shrink-0 text-ink-muted">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div id={`faq-panel-${i}`} role="region" hidden={!isOpen} className="pb-5 text-sm text-ink-muted">
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
