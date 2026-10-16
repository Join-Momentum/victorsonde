import { CohortIntro } from "@/components/home/CohortIntro";
import { FeaturedVideo } from "@/components/home/FeaturedVideo";
import { FinalCta } from "@/components/home/FinalCta";
import { HomeHero } from "@/components/home/HomeHero";
import { LabTeaser } from "@/components/home/LabTeaser";
import { Newsletter } from "@/components/home/Newsletter";
import { ProofInMotion } from "@/components/home/ProofInMotion";
import { SpeakingTeaser } from "@/components/home/SpeakingTeaser";
import { TrackRecord } from "@/components/home/TrackRecord";
import { WaysToWork } from "@/components/home/WaysToWork";
import { WhatImBuilding } from "@/components/home/WhatImBuilding";
import { WhyItMatters } from "@/components/home/WhyItMatters";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <CohortIntro />
      <WhyItMatters />
      <WhatImBuilding />
      <LabTeaser />
      <ProofInMotion />
      <FeaturedVideo />
      <TrackRecord />
      <SpeakingTeaser />
      <Newsletter />
      <WaysToWork />
      <FinalCta />
    </main>
  );
}
