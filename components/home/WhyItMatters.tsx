import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { EvidenceFigure } from "@/components/ui/EvidenceFigure";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { Quote } from "@/components/ui/Quote";
import { Rule } from "@/components/ui/Rule";
import { SectionHead } from "@/components/ui/SectionHead";
import { Split } from "@/components/ui/Split";
import { Todo } from "@/components/ui/Todo";
import { images } from "@/lib/images";

/** Homepage section 02: the argument for evidence over claims. */
export function WhyItMatters() {
  return (
    <Band tone="white">
      <SectionHead num="02">
        <Label>Why this matters</Label>
        <Display size="d2">
          A CV describes you.
          <br />
          Evidence shows you.
        </Display>
      </SectionHead>
      <Split className="items-start">
        <div>
          <Lede>
            A CV is a claim, written by the person being assessed. A certificate proves you completed a course, it
            rarely proves you can handle the messy middle of a real project. Both are useful. Neither is enough on its
            own.
          </Lede>
          <p>
            Meanwhile, the people with the most potential often have the least access to the experience that would
            make them credible: the internship they couldn&apos;t afford, the stretch project nobody offered them, the
            first role that required experience they were never given the chance to build.
          </p>
          <p>
            Employers feel the same gap from the other side. They are asked to make expensive decisions on thin,
            unverifiable signals.
          </p>
          <p>
            <strong>Simulations close the gap.</strong> They create real work to point at, and portfolios make that
            work visible, structured and checkable. Not a replacement for the CV. The thing that finally backs it up.
          </p>
        </div>
        <EvidenceFigure
          tall
          image={{ src: images.presentingLectern, alt: "Victor Sonde presenting at a lectern" }}
          tab="EX-01"
          title="Making the argument in the room"
          rows={[
            { label: "What", value: "Capability & evidence session with programme participants" },
            { label: "Where", value: <Todo>Venue &amp; date to confirm</Todo> },
            { label: "Role", value: "Facilitator" },
          ]}
        />
      </Split>
      <Rule className="my-[clamp(40px,6vw,72px)]" />
      <Quote cite="Victor Sonde">
        &quot;Talent is evenly distributed. Evidence of talent is not. That gap is the problem I&apos;m building
        against.&quot;
      </Quote>
    </Band>
  );
}
