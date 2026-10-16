import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Label } from "@/components/ui/Label";
import { SectionHead } from "@/components/ui/SectionHead";

const areas = [
  { label: "Public services", text: "Digital transformation and delivery inside UK government and public-sector environments." },
  { label: "Product & delivery", text: "Leading teams from discovery to live service, with accountability for outcomes." },
  { label: "AI & automation", text: "Building AI-enabled products where the value is measurable, not decorative." },
  {
    label: "Defence & security",
    text: "Operational readiness, critical systems and capability programmes with security-sensitive stakeholders.",
  },
];

/** Homepage section 07: four areas of past delivery. */
export function TrackRecord() {
  return (
    <Band tone="paper">
      <SectionHead num="07">
        <Label>Track record</Label>
        <Display size="d2">
          Twenty years of shipping
          <br />
          things that had to work
        </Display>
      </SectionHead>
      <Grid cols={4}>
        {areas.map((area) => (
          <div key={area.label}>
            <Label tone="amber">{area.label}</Label>
            <p>{area.text}</p>
          </div>
        ))}
      </Grid>
      <p className="mt-[30px]">
        <ButtonLink href="/work" variant="secondary" size="sm" arrow>
          See the work in detail
        </ButtonLink>
      </p>
    </Band>
  );
}
