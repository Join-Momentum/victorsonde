import type { Metadata } from "next";
import { BookCard } from "@/components/cards/BookCard";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { getBooks } from "@/lib/content";

export const metadata: Metadata = { title: "Books by Victor Sonde", description: "Books in development, and how to hear about them first." };

/**
 * `/books` (06-content-media.md §4.5). Empty-catalogue state, verbatim
 * per spec: "The books are coming." — no title has entered even "Idea in
 * Development" status yet.
 */
export default function BooksPage() {
  const books = getBooks();

  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Books", url: "/books" }])} />

      {books.length > 0 ? (
        <section>
          <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
            <h1 className="text-3xl font-semibold text-ink sm:text-4xl">Books</h1>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {books.map((book) => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="mx-auto max-w-wide px-6 py-24 text-center sm:py-32">
            <h1 className="text-4xl font-semibold text-ink sm:text-5xl">The books are coming.</h1>
            <p className="mx-auto mt-4 max-w-prose text-lg text-ink-muted">
              Nothing has been announced yet — join the list to hear the moment it&apos;s real.
            </p>
            <div className="mx-auto mt-10 max-w-md">
              <NewsletterForm context="books-empty" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
