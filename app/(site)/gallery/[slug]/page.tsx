import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlbumGrid } from "@/components/gallery/AlbumGrid";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { getAlbums } from "@/lib/content";

export function generateStaticParams() {
  return getAlbums().map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbums().find((a) => a.slug === slug);
  return { title: album?.title ?? "Album" };
}

export default async function AlbumPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const album = getAlbums().find((a) => a.slug === slug);
  if (!album) notFound();

  return (
    <>
      <StructuredData
        data={breadcrumbList([
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
          { name: album.title, url: `/gallery/${album.slug}` },
        ])}
      />
      <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
        <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{album.title}</h1>
        {album.description && <p className="mt-2 max-w-prose text-ink-muted">{album.description}</p>}
        <div className="mt-8">
          <AlbumGrid images={album.images} album={album.slug} />
        </div>
      </div>
    </>
  );
}
