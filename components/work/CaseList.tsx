import { Band } from "@/components/ui/Band";
import { Card } from "@/components/ui/Card";
import { Kicker } from "@/components/ui/Kicker";
import { caseSummaries } from "@/content/cases";
import { CaseSummary } from "./CaseSummary";

const positionOf = (i: number, total: number) => (i === 0 ? "first" : i === total - 1 ? "last" : "middle");

/** All case-study summaries followed by the content note. */
export function CaseList() {
  return (
    <Band tone="white">
      {caseSummaries.map((c, i) => (
        <CaseSummary key={c.tab} data={c} position={positionOf(i, caseSummaries.length)} />
      ))}
      <Card variant="flag" className="mt-10">
        <Kicker>Content note</Kicker>
        <p className="m-0">
          Every case study needs your confirmed detail before launch. Where a client, figure or outcome can&apos;t be
          published, the page carries the shape of the work without inventing the specifics.
        </p>
      </Card>
    </Band>
  );
}
