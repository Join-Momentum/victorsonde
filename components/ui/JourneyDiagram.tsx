"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { JourneyStage } from "@/types/models";

/**
 * The JourneyDiagram family (07-design-system.md §5.5) — reused for DIL's
 * 11-stop journey, the talent pathway, delivery models and theory-of-
 * change diagrams. One responsive implementation covers both the
 * horizontal-rail (desktop) and vertical-rail (mobile) variants so
 * information parity is automatic rather than something to keep in sync
 * across two layouts. A stage only becomes an expandable button when it
 * actually has detail to reveal (`whatYouDo` etc.) — no fake affordances
 * on stages that are currently title-only.
 */
interface JourneyDiagramProps {
  stages: JourneyStage[];
  className?: string;
}

export function JourneyDiagram({ stages, className }: JourneyDiagramProps) {
  const [openStage, setOpenStage] = useState<number | null>(null);

  return (
    <ol className={cn("flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-0", className)}>
      {stages.map((stage, i) => {
        const hasDetail = Boolean(stage.whatYouDo || stage.whatYouProduce || stage.whoInvolved || stage.artefactExample);
        const isOpen = openStage === stage.order;
        const isLast = i === stages.length - 1;

        return (
          <li key={stage.order} className="flex flex-1 flex-col lg:flex-row lg:items-stretch">
            <div className="flex flex-1 flex-col gap-2 rounded-lg border border-border bg-surface p-5">
              {stage.phase && (
                <span className="font-utility text-xs text-ink-muted uppercase">{stage.phase}</span>
              )}
              <div className="flex items-center gap-2">
                <span className="font-utility text-sm text-brand-primary">0{stage.order}</span>
                {hasDetail ? (
                  <button
                    type="button"
                    className="text-left text-base font-semibold text-ink"
                    aria-expanded={isOpen}
                    aria-controls={`journey-stage-${stage.order}`}
                    onClick={() => setOpenStage(isOpen ? null : stage.order)}
                  >
                    {stage.title}
                  </button>
                ) : (
                  <span className="text-base font-semibold text-ink">{stage.title}</span>
                )}
              </div>
              {hasDetail && (
                <div id={`journey-stage-${stage.order}`} hidden={!isOpen} className="flex flex-col gap-1 text-sm text-ink-muted">
                  {stage.whatYouDo && <p>{stage.whatYouDo}</p>}
                  {stage.whatYouProduce && <p>Produces: {stage.whatYouProduce}</p>}
                  {stage.whoInvolved && <p>Involves: {stage.whoInvolved}</p>}
                  {stage.artefactExample && <p>Example: {stage.artefactExample}</p>}
                </div>
              )}
            </div>
            {/* Decorative connector — purely visual, the <ol> order already conveys sequence to assistive tech */}
            {!isLast && (
              <div aria-hidden="true" className="h-4 w-px self-center bg-border lg:h-px lg:w-4 lg:self-auto lg:my-auto" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
