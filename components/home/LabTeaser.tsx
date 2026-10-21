import { ActionRow } from "@/components/ui/ActionRow";
import { Badge } from "@/components/ui/Badge";
import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Display } from "@/components/ui/Display";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { SectionHead } from "@/components/ui/SectionHead";
import { Split } from "@/components/ui/Split";
import { Tag } from "@/components/ui/Tag";
import { TagList } from "@/components/ui/TagList";
import { labCapabilities } from "@/content/lab";

/** Homepage section 04: the Decision Intelligence Lab, pitched to partners. */
export function LabTeaser() {
  return (
    <Band tone="dark">
      <SectionHead num="04">
        <Badge variant="soon">Launching soon</Badge>
        <Label tone="inverse" className="mb-0 mt-3.5">
          A Victor Sonde initiative
        </Label>
        <Display size="d2" className="mt-2 text-white">
          Decision Intelligence Lab
          <br />
          for African Youth
        </Display>
        <Lede className="mt-2.5 text-orange">
          Turning everyday challenges into structured decisions, creative solutions and opportunity portfolios.
        </Lede>
      </SectionHead>
      <Split cols="1.05fr .95fr" className="items-start">
        <div>
          <Lede inverse>
            A separate initiative from the Career Bridge programme, and a bigger one. It is a simulation-based
            capacity-building programme for young Africans aged 18–45, across the continent and the diaspora.
          </Lede>
          <p>
            The gap it addresses isn&apos;t ability. It&apos;s decision architecture: the structured way of thinking
            that turns talent into work, enterprise and impact, and that most people were simply never taught.
          </p>
          <p>
            It is built to be measurable, fundable and SDG-aligned from day one, and it is looking for founding
            partners rather than applicants.
          </p>
          <ActionRow>
            <ButtonLink href="/lab" arrow>
              Partner with the Lab
            </ButtonLink>
            <ButtonLink href="/lab" variant="secondary">
              Read the full initiative
            </ButtonLink>
          </ActionRow>
        </div>
        <div>
          <Label tone="inverse">Six capabilities, one stack</Label>
          <TagList className="mt-3">
            {labCapabilities.map((c) => (
              <Tag key={c.name}>{c.name}</Tag>
            ))}
          </TagList>
          <Label tone="soft" className="mt-[22px]">
            Ages 18–45 · Africa &amp; diaspora · simulation technology powered by{" "}
            <span className="text-orange">Evidentize.io</span>
          </Label>
        </div>
      </Split>
    </Band>
  );
}
