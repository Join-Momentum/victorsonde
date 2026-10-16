import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Kicker } from "@/components/ui/Kicker";
import { BrandSwatches } from "@/components/shared/BrandSwatches";
import { FrameworkCard } from "@/components/shared/FrameworkCard";
import { designSystem } from "@/content/notes";

/** Palette, type and layout decisions behind the design. */
export function DesignSystemSummary() {
  return (
    <>
      <Display size="d3" className="mb-[18px] mt-[clamp(38px,5vw,60px)]">
        Design system
      </Display>
      <Grid cols={3}>
        <Card>
          <Kicker>Palette</Kicker>
          <Display as="h3" size="d4">
            Orange, warm dark, black, white
          </Display>
          <BrandSwatches includeWhite className="mt-2" />
          <p className="mb-0 mt-2.5 text-[.96rem]">
            Orange does all the pointing; the two darks alternate bands. Text on orange is always #241A18.
          </p>
        </Card>
        {designSystem.map((item) => (
          <FrameworkCard key={item.title} kicker={item.kicker} title={item.title} size="sm">
            {item.text}
          </FrameworkCard>
        ))}
      </Grid>
    </>
  );
}
