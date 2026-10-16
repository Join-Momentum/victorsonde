import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { DefinitionList, type Definition } from "@/components/ui/DefinitionList";
import { Split } from "@/components/ui/Split";

type Props = {
  /** Left column: badge or kicker, brand, description and CTA. */
  intro: ReactNode;
  facts: Definition[];
  /** Full-width content beneath the two columns. */
  children?: ReactNode;
};

/** Full venture profile card: description beside its facts. */
export function VentureDetail({ intro, facts, children }: Props) {
  return (
    <Card as="article">
      <Split gap="gap-[22px]">
        <div>{intro}</div>
        <DefinitionList items={facts} />
      </Split>
      {children}
    </Card>
  );
}
