"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { JourneyStage } from "@/types/models";

/**
 * The JourneyDiagram family (07-design-system.md §5.5) — reused for DIL's
 * 11-stop journey, the talent pathway, delivery models and theory-of-
 * change diagrams. A wrapping grid rather than a single flex row: a fixed
 * single-row "rail" either crams every stop into an unreadable sliver
 * (many stops, e.g. DIL's 11) or leaves huge gaps (few stops, e.g. a
 * 4-stop delivery model), and neither degrades gracefully across screen
 * widths. Grid columns give every card a comfortable minimum width and
 * let extra stops wrap onto additional rows instead. Order is still
 * conveyed by the numbered `<ol>` alone (no connector line needed) — a
 * stage only becomes an expandable button when it actually has detail to
 * reveal (`whatYouDo` etc.), no fake affordances on stages that are
 * currently title-only.
 */
interface JourneyDiagramProps {
  stages: JourneyStage[];
  className?: string;
}

export function JourneyDiagram({ stages, className }: JourneyDiagramProps) {
  const [openStage, setOpenStage] = useState<number | null>(null);

  return (
    <ol className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {stages.map((stage) => {
        const hasDetail = Boolean(stage.whatYouDo || stage.whatYouProduce || stage.whoInvolved || stage.artefactExample);
        const isOpen = openStage === stage.order;

        return (
          <li key={stage.order} className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-5">
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
          </li>
        );
      })}
    </ol>
  );
}
