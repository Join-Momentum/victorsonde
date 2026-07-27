import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/ui/Hero";
import { EmptyState } from "@/components/ui/EmptyState";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { getAlbums } from "@/lib/content";

export const metadata: Metadata = { title: "Photo Gallery", description: "A curated, magazine-grade record of the work." };

/** `/gallery` (06-content-media.md §2.2). Albums with no images are hidden — none have images yet. */
export default function GalleryPage() {
  const albums = getAlbums();

  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Gallery", url: "/gallery" }])} />
      <Hero headline="Gallery" />
      <section>
        <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
          {albums.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {albums.map((album) => (
                <Link key={album.slug} href={`/gallery/${album.slug}`} className="rounded-lg border border-border p-6">
                  <h3 className="font-semibold text-ink">{album.title}</h3>
                  <p className="text-sm text-ink-muted">{album.images.length} photos</p>
                </Link>
              ))}
            </div>
          ) : (
            <EmptyState message="Albums are being curated and rights-cleared — check back soon." />
          )}
        </div>
      </section>
    </>
  );
}
