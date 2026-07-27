import type { Metadata } from "next";
import { VideoCard } from "@/components/cards/VideoCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Hero } from "@/components/ui/Hero";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { getVideos } from "@/lib/content";

export const metadata: Metadata = { title: "Videos", description: "Keynotes, interviews and venture videos." };

/** `/videos` (06-content-media.md §3.2). No footage exists yet — see content/videos.ts. */
export default function VideosPage() {
  const videos = getVideos();

  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Videos", url: "/videos" }])} />
      <Hero headline="Videos" />
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          {videos.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <VideoCard key={video.slug} video={video} />
              ))}
            </div>
          ) : (
            <EmptyState message="Video content is on the way." actionLabel="Read Insights instead" actionHref="/insights" />
          )}
        </div>
      </section>
    </>
  );
}
