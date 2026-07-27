import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { getVideos } from "@/lib/content";

export function generateStaticParams() {
  return getVideos().map((video) => ({ slug: video.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideos().find((v) => v.slug === slug);
  return { title: video?.title ?? "Video", description: video?.excerpt };
}

export default async function VideoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = getVideos().find((v) => v.slug === slug);
  if (!video) notFound();

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "Videos", url: "/videos" },
            { name: video.title, url: `/videos/${video.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: video.title,
            description: video.excerpt,
            thumbnailUrl: video.thumbnail,
            uploadDate: video.publishedAt,
          },
        ]}
      />
      <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-prose">
          <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{video.title}</h1>
          <div className="mt-6">
            <VideoPlayer
              provider={video.provider === "vimeo" ? "native" : video.provider}
              videoId={video.videoUrl ?? ""}
              poster={video.thumbnail ?? video.featuredImage ?? ""}
              title={video.title}
              context="video-detail"
              captionsUrl={video.captionsUrl}
            />
          </div>
          {video.longDescription && <p className="mt-6 text-ink opacity-80">{video.longDescription}</p>}
          {video.transcript && (
            <details className="mt-8">
              <summary className="cursor-pointer font-semibold text-ink">Transcript</summary>
              <p className="mt-3 whitespace-pre-line text-ink-muted">{video.transcript}</p>
            </details>
          )}
        </div>
      </div>
    </>
  );
}
