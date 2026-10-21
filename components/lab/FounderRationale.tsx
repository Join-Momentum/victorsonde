import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { EvidenceFigure } from "@/components/ui/EvidenceFigure";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { Quote } from "@/components/ui/Quote";
import { Split } from "@/components/ui/Split";
import { Todo } from "@/components/ui/Todo";
import { images } from "@/lib/images";

/** Why the founder is building the Lab, and why now. */
export function FounderRationale() {
  return (
    <Band tone="white">
      <Split cols="1.05fr .95fr" className="items-start">
        <div>
          <Label tone="amber">Founder · why now</Label>
          <Display size="d2" className="mb-[18px] mt-2.5">
            I keep meeting brilliant young people stuck in broken systems.
          </Display>
          <Lede>
            For years I&apos;ve built learning, employability and entrepreneurship programmes across Africa, the UK and
            the diaspora. The pattern never changes: the talent is real, the ambition is real, but the structured
            thinking that converts ability into opportunity was never taught.
          </Lede>
          <p>
            Three forces make this urgent now: a generation-defining youth bulge, AI that makes structured guidance
            affordable at scale, and employers everywhere desperate for people who can actually solve problems.
          </p>
          <Quote cite="Victor Sonde" className="mt-7">
            &quot;The gap isn&apos;t ability. It&apos;s decision architecture, and that can be taught.&quot;
          </Quote>
        </div>
        <EvidenceFigure
          tall
          image={{ src: images.founderPortrait, alt: "Victor Sonde" }}
          tab="LAB-01"
          title="Founder, Decision Intelligence Lab"
        />
      </Split>
    </Band>
  );
}
