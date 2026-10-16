import Image from "next/image";
import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Display } from "@/components/ui/Display";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { Split } from "@/components/ui/Split";
import { images } from "@/lib/images";

/** Speaking page header with lectern photograph. */
export function SpeakingHeader() {
  return (
    <Band tone="ink" as="header" container="wide" padding="pt-(--band-y) pb-0">
      <Split cols="1.05fr .95fr" className="items-end">
        <div className="pb-[clamp(34px,5vw,70px)]">
          <Label tone="inverse">Speaking &amp; facilitation</Label>
          <Display as="h1" size="d1" className="mb-5 mt-3.5 text-white">
            I&apos;d rather
            <br />
            run the room
            <br />
            than fill it.
          </Display>
          <Lede inverse className="max-w-[50ch]">
            Keynotes and workshops on careers, AI, delivery and how institutions build capability. Practical, direct,
            and built for the audience in front of me.
          </Lede>
          <ButtonLink href="/speaking" arrow className="mt-[22px]">
            Check availability
          </ButtonLink>
        </div>
        <Image
          src={images.speakingLectern}
          alt="Victor Sonde speaking at a lectern"
          priority
          sizes="(max-width: 880px) 100vw, 45vw"
          className="h-auto w-full object-cover"
        />
      </Split>
    </Band>
  );
}
