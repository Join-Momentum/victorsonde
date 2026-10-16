import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { Grid } from "@/components/ui/Grid";
import { Label } from "@/components/ui/Label";
import { SectionHead } from "@/components/ui/SectionHead";
import { Todo } from "@/components/ui/Todo";
import { VideoButton } from "@/components/video/VideoButton";
import { images } from "@/lib/images";

/** Homepage section 06: the featured "Meet Victor" video and three shorter clips. */
export function FeaturedVideo() {
  return (
    <Band tone="ink">
      <SectionHead num="06">
        <Label tone="inverse">Watch</Label>
        <Display size="d2" className="text-white">
          Meet Victor
        </Display>
      </SectionHead>
      <VideoButton
        video="Meet Victor"
        thumbnail={images.meetVictorThumb}
        thumbnailAlt="Video thumbnail: Meet Victor"
        meta={
          <>
            Featured · <Todo>video to supply</Todo>
          </>
        }
        title="Why I built simulation-based work experience"
      />
      <Grid cols={3} className="mt-[22px]">
        <VideoButton
          small
          video="Simulation walkthrough"
          thumbnail={images.presentingLectern}
          meta="Demo"
          title="How a simulation becomes a portfolio"
        />
        <VideoButton small video="Speaking reel" thumbnail={images.speakingLectern} meta="Reel" title="Speaking highlights" />
        <VideoButton
          small
          video="Why capability needs evidence"
          thumbnail={images.conferencePortrait}
          meta="Short"
          title="Why capability needs evidence"
        />
      </Grid>
    </Band>
  );
}
