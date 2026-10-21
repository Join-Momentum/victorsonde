import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { DefinitionList } from "@/components/ui/DefinitionList";
import { Display } from "@/components/ui/Display";
import { Split } from "@/components/ui/Split";
import { images } from "@/lib/images";

/** Wide dark feature card for Career Bridge Foundation, the venture that owns the primary CTA. */
export function CareerBridgeFeature() {
  return (
    <Card as="article" variant="feature" dark className="mb-[22px]">
      <Split cols=".95fr 1.05fr" gap="gap-0" className="items-stretch">
        <Image
          src={images.inConversation}
          alt="Victor Sonde in conversation with a participant"
          sizes="(max-width: 880px) 100vw, 45vw"
          className="h-full min-h-[280px] w-full object-cover object-[58%_32%]"
        />
        <div className="p-[clamp(22px,3vw,40px)]">
          <Badge variant="open">Applications open</Badge>
          <Display as="h3" size="d3" className="mb-3 mt-3.5 text-white">
            Career Bridge Foundation
          </Display>
          <DefinitionList
            className="text-sand-2"
            items={[
              { term: "Problem", detail: "Capable people can't prove capability. Employers can't verify it." },
              {
                term: "Building",
                detail:
                  "The Simulation-Based Work Experience Programme: five disciplines producing assessed evidence portfolios.",
              },
              { term: "Serves", detail: "Professionals changing or accelerating careers; employers and programme partners." },
              { term: "My role", detail: "Founder. Programme direction, simulation design, delivery." },
              { term: "Status", detail: "Founding cohort recruiting now." },
            ]}
          />
          <ButtonLink href="/cohort" size="sm" arrow className="mt-[18px]">
            Apply for the Founding Cohort
          </ButtonLink>
        </div>
      </Split>
    </Card>
  );
}
