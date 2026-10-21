import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Kicker } from "@/components/ui/Kicker";
import { SectionHead } from "@/components/ui/SectionHead";
import { Todo } from "@/components/ui/Todo";
import { BrandSwatches } from "@/components/shared/BrandSwatches";

function Download({ label }: { label: string }) {
  return (
    <ButtonLink href="/presskit" variant="secondary" size="sm" className="mt-auto self-start">
      {label}
    </ButtonLink>
  );
}

/** Downloadable press assets and brand usage rules. */
export function Downloads() {
  return (
    <>
      <SectionHead num="Assets" className="mb-[clamp(26px,4vw,52px)] mt-[clamp(38px,5vw,60px)]">
        <Display size="d3">Downloads</Display>
      </SectionHead>
      <Grid cols={4}>
        <Card>
          <Kicker>Photography</Kicker>
          <Display as="h3" size="d4">
            Headshot pack
          </Display>
          <p className="text-[.96rem]">
            Three crops (square, 4:5, 16:9) at print and web resolution. <Todo>Pack to assemble</Todo>
          </p>
          <Download label="Download .zip" />
        </Card>
        <Card>
          <Kicker>Identity</Kicker>
          <Display as="h3" size="d4">
            Logo pack
          </Display>
          <p className="text-[.96rem]">
            Victor Sonde, Career Bridge Foundation, Evidentize.io and Join Momentum Inc: primary, black, white and
            inverted, horizontal and stacked, plus icons. Supplied and in use.
          </p>
          <Download label="Download .zip" />
        </Card>
        <Card>
          <Kicker>Speaking</Kicker>
          <Display as="h3" size="d4">
            Speaker one-pager
          </Display>
          <p className="text-[.96rem]">
            Themes, formats, audiences and technical requirements in a single PDF. <Todo>To produce</Todo>
          </p>
          <Download label="Download .pdf" />
        </Card>
        <Card>
          <Kicker>Brand</Kicker>
          <Display as="h3" size="d4">
            Colour &amp; usage
          </Display>
          <BrandSwatches className="mt-1" />
          <p className="mb-0 mt-2.5 text-[.96rem]">Dark text on orange. Never white on orange. Never recolour the logo.</p>
        </Card>
      </Grid>
    </>
  );
}
