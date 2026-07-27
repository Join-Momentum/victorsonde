import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PurchaseButton } from "@/components/commerce/PurchaseButton";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { getBooks } from "@/lib/content";

export function generateStaticParams() {
  return getBooks().map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const book = getBooks().find((b) => b.slug === slug);
  return { title: book?.title ?? "Book", description: book?.coreProposition };
}

/** `/books/[slug]` (06-content-media.md §4.4). */
export default async function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = getBooks().find((b) => b.slug === slug);
  if (!book) notFound();

  const isPurchasable = book.status === "Pre-Order" || book.status === "Available Now";

  return (
    <>
      <StructuredData
        data={[
          breadcrumbList([
            { name: "Home", url: "/" },
            { name: "Books", url: "/books" },
            { name: book.title, url: `/books/${book.slug}` },
          ]),
          { "@context": "https://schema.org", "@type": "Book", name: book.title, isbn: book.isbn },
        ]}
      />

      <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-bg-alt">
            {book.coverImage ? (
              <Image src={book.coverImage} alt="" fill sizes="320px" style={{ objectFit: "cover" }} />
            ) : (
              <div className="flex h-full items-center justify-center p-6 text-center text-xl font-semibold text-ink-muted">
                {book.title}
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{book.title}</h1>
            {book.subtitle && <p className="mt-2 text-lg text-ink-muted">{book.subtitle}</p>}
            <p className="mt-4 max-w-prose text-ink opacity-80">{book.coreProposition}</p>

            <div className="mt-8">
              {isPurchasable ? (
                <div className="flex flex-wrap gap-3">
                  {book.purchaseOptions.map((option) => (
                    <PurchaseButton key={`${option.format}-${option.provider}`} option={option} book={book.slug} />
                  ))}
                </div>
              ) : (
                <div className="max-w-md">
                  <NewsletterForm context={`book-${book.slug}`} />
                </div>
              )}
            </div>

            {book.readerOutcomes.length > 0 && (
              <div className="mt-10">
                <h2 className="text-sm font-semibold tracking-wide text-ink-muted uppercase">What you&apos;ll get</h2>
                <ul className="mt-3 list-inside list-disc text-ink-muted">
                  {book.readerOutcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
