import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Band } from "@/components/ui/Band";
import { chipClasses } from "@/components/ui/Chip";
import { ChipRow } from "@/components/ui/ChipRow";
import { Display } from "@/components/ui/Display";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { disciplines, type Discipline } from "@/content/disciplines";

/** Track page header with a switcher across the five disciplines. */
export function TrackHeader({ discipline }: { discipline: Discipline }) {
  return (
    <Band tone="dark" as="header" container="wide" padding="pt-(--band-y) pb-[clamp(28px,4vw,44px)]">
      <Link href="/cohort" className="no-underline">
        <Label as="span" tone="inverse">
          ← Founding Cohort
        </Label>
      </Link>
      <Badge variant="open" className="ml-3">
        Applications open
      </Badge>
      <Display as="h1" size="d1" className="mb-[18px] mt-4 max-w-[15ch] text-white">
        {discipline.title}
      </Display>
      <Lede inverse className="max-w-[58ch]">
        {discipline.lede}
      </Lede>
      <ChipRow label="Choose a discipline" margin="mt-6">
        {disciplines.map((d) => (
          <Link
            key={d.slug}
            href={`/track/${d.slug}`}
            aria-current={d.slug === discipline.slug ? "page" : undefined}
            className={chipClasses(d.slug === discipline.slug)}
          >
            {d.chip}
          </Link>
        ))}
      </ChipRow>
    </Band>
  );
}
