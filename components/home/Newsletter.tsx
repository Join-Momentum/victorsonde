import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Kicker } from "@/components/ui/Kicker";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { SubscribeForm } from "@/components/shared/SubscribeForm";

/** LinkedIn newsletter promotion alongside the separate cohort-updates list. */
export function Newsletter() {
  return (
    <Band
      tone="dark"
      containerClassName="grid grid-cols-1 items-center gap-[clamp(24px,4vw,56px)] min-[821px]:grid-cols-[1.15fr_.85fr]"
    >
      <div>
        <Label tone="inverse">The newsletter</Label>
        <Display size="d2" className="mb-3.5 mt-2.5 text-white">
          Join 3,600+ professionals reading Victor&apos;s insights
        </Display>
        <Lede inverse>Published on LinkedIn. Careers, AI, transformation and what I&apos;m learning while building.</Lede>
        <ButtonLink href="/insights" arrow className="mt-[18px]">
          Read on LinkedIn
        </ButtonLink>
      </div>
      <Card>
        <Kicker>Separate list</Kicker>
        <Display as="h3" size="d4">
          Get cohort and launch updates
        </Display>
        <p className="text-[.96rem] text-sand-2">
          Cohort dates, new simulations, and news when the Decision Intelligence Lab opens. This is not the LinkedIn
          newsletter — different list, different purpose.
        </p>
        <SubscribeForm className="mt-3.5" />
      </Card>
    </Band>
  );
}
