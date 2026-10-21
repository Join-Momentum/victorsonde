import Image from "next/image";
import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { Split } from "@/components/ui/Split";
import { images } from "@/lib/images";

/** About page header with environmental portrait. */
export function AboutHeader() {
  return (
    <Band tone="dark" as="header" container="wide" padding="pt-(--band-y) pb-0">
      <Label tone="inverse">About</Label>
      <Display as="h1" size="d1" className="mb-6 mt-3.5 max-w-[14ch] text-white">
        The builder behind the ventures
      </Display>
      <Split cols="1.1fr .9fr" className="items-end">
        <Lede inverse className="max-w-[56ch] pb-[clamp(30px,5vw,70px)]">
          I&apos;ve spent my career in the gap between what organisations intend and what they actually deliver, and
          between what people are capable of and what they can prove. Everything I&apos;ve built since sits in that gap.
        </Lede>
        <Image
          src={images.environmentalPortrait}
          alt="Portrait of Victor Sonde"
          priority
          sizes="(max-width: 880px) 100vw, 45vw"
          className="h-auto w-full object-cover [mask-image:linear-gradient(to_bottom,#000_88%,transparent)]"
        />
      </Split>
    </Band>
  );
}
