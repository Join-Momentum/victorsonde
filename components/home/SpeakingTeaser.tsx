import { Band } from "@/components/ui/Band";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Display } from "@/components/ui/Display";
import { EvidenceFigure } from "@/components/ui/EvidenceFigure";
import { Grid } from "@/components/ui/Grid";
import { Label } from "@/components/ui/Label";
import { Lede } from "@/components/ui/Lede";
import { SectionHead } from "@/components/ui/SectionHead";
import { Split } from "@/components/ui/Split";
import { Tag } from "@/components/ui/Tag";
import { TagList } from "@/components/ui/TagList";
import { FrameworkCard } from "@/components/shared/FrameworkCard";
import { images } from "@/lib/images";

const topics = [
  "AI & the future of work",
  "Careers & employability",
  "Product & delivery leadership",
  "Digital transformation",
  "Entrepreneurship",
  "Institutional capability",
];

/** Homepage section 08: speaking frameworks and topics. */
export function SpeakingTeaser() {
  return (
    <Band tone="white">
      <SectionHead num="08">
        <Label>Speaking &amp; ideas</Label>
        <Display size="d2">Bring me into the room</Display>
      </SectionHead>
      <Split cols=".9fr 1.1fr">
        <EvidenceFigure
          image={{ src: images.speakingLectern, alt: "Victor Sonde speaking" }}
          tab="EX-05"
          title="Keynotes, workshops, facilitation"
          rows={[{ label: "Formats", value: "Keynote · workshop · panel · masterclass · programme design" }]}
        />
        <div>
          <Lede>Two ideas run through everything I say on a stage.</Lede>
          <Grid cols={2} className="mb-6 mt-5">
            <FrameworkCard kicker="Framework" title="Join → Prove → Progress">
              How people move from access, to demonstrated capability, to opportunity.
            </FrameworkCard>
            <FrameworkCard kicker="Framework" title="Evidence-based employability">
              Designing programmes around what people can show, not what they attended.
            </FrameworkCard>
          </Grid>
          <TagList className="mb-6">
            {topics.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TagList>
          <ButtonLink href="/speaking" size="sm" arrow>
            Book Victor to speak
          </ButtonLink>
        </div>
      </Split>
    </Band>
  );
}
