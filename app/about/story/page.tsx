import type { Metadata } from "next";
import { Hero } from "@/components/ui/Hero";
import { ChapterProse } from "@/components/about/ChapterProse";
import { MomentCards } from "@/components/about/MomentCards";
import { PhotoEssay } from "@/components/about/PhotoEssay";
import { BuildStrip } from "@/components/home/BuildStrip";
import { CtaBand } from "@/components/ui/CtaBand";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { storyContent } from "@/content/pages/story";
import { getBuilds } from "@/lib/content";

export const metadata: Metadata = {
  title: storyContent.seo.title,
  description: storyContent.seo.metaDescription,
};

/**
 * `/about/story` (02-sitemap.md §3.2). Origin chapter, turning points and
 * photo essay all render nothing right now — see content/pages/story.ts
 * for why. "From story to system" reuses BuildStrip as the bridge to the
 * Five Builds, same as the spec calls for.
 */
export default function StoryPage() {
  const builds = getBuilds();

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
            { name: "Victor's Story", url: "/about/story" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: storyContent.seo.title,
            description: storyContent.seo.metaDescription,
            mainEntity: { "@type": "Person", name: "Victor Sonde" },
          },
        ]}
      />

      <Hero
        headline={storyContent.hero.headline}
        supportingCopy={storyContent.hero.supportingCopy}
        primaryCta={storyContent.hero.primaryCta}
        secondaryCta={storyContent.hero.secondaryCta}
      />

      <ChapterProse chapters={storyContent.chapters} />
      <MomentCards moments={storyContent.moments} />

      <BuildStrip builds={builds} />

      <PhotoEssay images={storyContent.photoEssay} />

      <CtaBand
        headline="See how the story becomes a system."
        primaryCta={{ ctaId: "cta.portfolio", label: "Explore the Impact Portfolio", href: "/portfolio" }}
        secondaryCta={{ ctaId: "cta.news" }}
        position="story-final-cta"
      />
    </>
  );
}
