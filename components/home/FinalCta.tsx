import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Display } from "@/components/ui/Display";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";

/** Closing homepage call to action. */
export function FinalCta() {
  return (
    <Band tone="ink" className="text-center">
      <Label tone="inverse">One last thing</Label>
      <Display size="d1" className="mx-auto mb-5 mt-3.5 max-w-[16ch] text-white">
        Stop describing your potential.
      </Display>
      <Lede inverse className="mx-auto mb-[26px] max-w-[52ch]">
        The founding cohort is where you start producing the proof.
      </Lede>
      <ButtonLink href="/cohort" arrow>
        Apply for the Founding Cohort
      </ButtonLink>
    </Band>
  );
}
