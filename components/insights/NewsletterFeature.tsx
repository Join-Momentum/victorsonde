import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Display } from "@/components/ui/Display";
import { Kicker } from "@/components/ui/Kicker";
import { Lede } from "@/components/ui/Lede";
import { Split } from "@/components/ui/Split";
import { images } from "@/lib/images";

/** Wide dark card promoting the LinkedIn newsletter. */
export function NewsletterFeature() {
  return (
    <Card as="article" variant="feature" dark className="mb-[34px]">
      <Split gap="gap-0" className="items-center">
        <div className="p-[clamp(24px,3.4vw,44px)]">
          <Kicker>LinkedIn newsletter</Kicker>
          <Display size="d2" className="mb-3.5 mt-3 text-white">
            3,600+ professionals
            <br />
            already read it
          </Display>
          <Lede inverse>
            Published on LinkedIn, where the conversation already happens. Careers, AI, transformation and lessons from
            building.
          </Lede>
          <ButtonLink href="/insights" arrow className="mt-4">
            Read on LinkedIn
          </ButtonLink>
        </div>
        <Image
          src={images.conferencePortrait}
          alt="Victor Sonde"
          sizes="(max-width: 880px) 100vw, 50vw"
          className="h-full min-h-[280px] w-full object-cover"
        />
      </Split>
    </Card>
  );
}
