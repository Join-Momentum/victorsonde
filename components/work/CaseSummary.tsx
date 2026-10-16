import type { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { DefinitionList, type Definition } from "@/components/ui/DefinitionList";
import { Display } from "@/components/ui/Display";
import { EvidenceFigure } from "@/components/ui/EvidenceFigure";
import { Label } from "@/components/ui/Label";
import { Split } from "@/components/ui/Split";

export type CaseSummaryData = {
  tab: string;
  image: { src: StaticImageData; alt: string };
  figureTitle: string;
  role: string;
  category: string;
  title: string;
  facts: Definition[];
};

type Props = {
  data: CaseSummaryData;
  position: "first" | "middle" | "last";
};

const spacing = {
  first: "pb-[clamp(34px,5vw,60px)] border-b border-paper-2",
  middle: "py-[clamp(34px,5vw,60px)] border-b border-paper-2",
  last: "pt-[clamp(34px,5vw,60px)]",
};

/** One case-study row on the Work page: captioned image beside the problem / remit / outcome facts. */
export function CaseSummary({ data, position }: Props) {
  return (
    <Split as="article" cols=".9fr 1.1fr" className={cn("items-start", spacing[position])}>
      <EvidenceFigure
        image={data.image}
        tab={data.tab}
        title={data.figureTitle}
        rows={[{ label: "Role", value: data.role }]}
      />
      <div>
        <Label tone="amber">{data.category}</Label>
        <Display size="d3" className="mb-3.5 mt-2.5">
          {data.title}
        </Display>
        <DefinitionList items={data.facts} />
        <p className="mb-0 mt-3.5">
          <Link href="/case" className="no-underline">
            <Label as="span" tone="amber">
              Read the full case →
            </Label>
          </Link>
        </p>
      </div>
    </Split>
  );
}
