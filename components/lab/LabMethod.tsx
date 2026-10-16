import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { SectionHead } from "@/components/ui/SectionHead";
import { FrameworkCard } from "@/components/shared/FrameworkCard";
import { labCapabilities } from "@/content/lab";
import { DecisionLoop } from "./DecisionLoop";

/** How the Lab teaches: the decision loop and six capabilities. */
export function LabMethod() {
  return (
    <Band tone="ink">
      <SectionHead num="Method">
        <Label tone="inverse">Simulation learning experience</Label>
        <Display size="d2" className="text-white">
          Learning by deciding
        </Display>
        <Lede inverse className="mt-2.5 max-w-[62ch]">
          Every scenario runs the same loop. Repeat it across dozens of real challenges and structured thinking
          becomes a reflex.
        </Lede>
      </SectionHead>
      <DecisionLoop />
      <Label tone="inverse" className="mt-4">
        The loop repeats — across life, career, enterprise and community scenarios
      </Label>
      <Grid cols={3} className="mt-[clamp(34px,5vw,56px)]">
        {labCapabilities.map((c, i) => (
          <FrameworkCard key={c.name} kicker={`${String(i + 1).padStart(2, "0")} / ${c.name}`}>
            {c.detail}
          </FrameworkCard>
        ))}
      </Grid>
    </Band>
  );
}
