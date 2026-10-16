import { Band } from "@/components/ui/Band";
import { EvidenceFigure } from "@/components/ui/EvidenceFigure";
import { Grid } from "@/components/ui/Grid";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { Split } from "@/components/ui/Split";
import { Todo } from "@/components/ui/Todo";
import { FrameworkCard } from "@/components/shared/FrameworkCard";
import { images } from "@/lib/images";

const principles = [
  { title: "Proof over claims", text: "If it can't be shown, it isn't finished." },
  { title: "Access is designed", text: "Opportunity gaps are built. They can be rebuilt." },
  { title: "Delivery is the test", text: "Strategy that never ships was never strategy." },
  { title: "Build, don't commentate", text: "Opinions are cheap. Institutions are hard." },
];

/** The short-version biography, principles and supporting photographs. */
export function AboutStory() {
  return (
    <Band tone="white">
      <Split cols="1.1fr .9fr" className="items-start">
        <div>
          <Label>The short version</Label>
          <Lede className="mt-3">
            I&apos;m an entrepreneur, product and delivery leader, educator, speaker and mentor. I build things: teams,
            products, programmes and institutions.
          </Lede>
          <p>
            My professional life started in delivery — the unglamorous discipline of getting complex work across the
            line with real constraints, real stakeholders and real consequences. Digital transformation. Product and
            delivery leadership. Public services. Defence and security capability. AI-enabled products.
          </p>
          <p>
            Somewhere in that work a pattern kept repeating. The people who struggled most to get in weren&apos;t short
            on ability. They were short on evidence — and nobody was giving them a legitimate way to build any.
          </p>
          <p>
            So I started building it. Career Bridge Foundation to create the work experience and widen access.
            Evidentize.io to make the evidence structured and credible. The Decision Intelligence Lab to take the same
            thinking to young Africans at scale. And Join Momentum Inc, the defence and security practice where the
            operational discipline behind all of it is earned and applied.
          </p>
          <Label tone="amber" className="mt-7">
            What I hold to
          </Label>
          <Grid cols={2} className="mt-3.5">
            {principles.map((p) => (
              <FrameworkCard key={p.title} title={p.title} size="sm">
                {p.text}
              </FrameworkCard>
            ))}
          </Grid>
        </div>
        <Grid>
          <EvidenceFigure
            tall
            image={{ src: images.founderPortrait, alt: "Victor Sonde" }}
            tab="EX-06"
            title="Founder journey"
            rows={[{ label: "Note", value: <Todo>Add 2–3 early-career photos for the story section</Todo> }]}
          />
          <EvidenceFigure
            image={{ src: images.taskForceBriefing, alt: "Victor Sonde at a Joint Task Force briefing" }}
            tab="EX-07"
            title="Institutional work"
            rows={[
              { label: "What", value: "Joint Task Force capability briefing" },
              { label: "Role", value: "Facilitator" },
            ]}
          />
        </Grid>
      </Split>
    </Band>
  );
}
