import { ActionRow } from "@/components/ui/ActionRow";
import { Badge } from "@/components/ui/Badge";
import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Display } from "@/components/ui/Display";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";

/** Decision Intelligence Lab page header. */
export function LabHeader() {
  return (
    <Band tone="dark" as="header" container="wide" padding="pt-(--band-y) pb-[clamp(34px,5vw,60px)]">
      <Badge variant="soon">Launching soon</Badge>
      <Label tone="inverse" className="mb-0 mt-4">
        A Victor Sonde initiative
      </Label>
      <Display as="h1" size="d1" className="mb-5 mt-3.5 max-w-[15ch] text-white">
        Decision Intelligence Lab for African Youth
      </Display>
      <Lede inverse className="max-w-[62ch]">
        Turning everyday challenges into structured decisions, creative solutions and opportunity portfolios.
        Simulation-based capacity building · ages 18–45 · Africa &amp; diaspora.
      </Lede>
      <ActionRow>
        <ButtonLink href="/lab" arrow>
          Partner with the Lab
        </ButtonLink>
        <ButtonLink href="/lab" variant="secondary">
          Request the pitch deck
        </ButtonLink>
      </ActionRow>
    </Band>
  );
}
