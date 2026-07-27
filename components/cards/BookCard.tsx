import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types/models";

const statusBadge: Record<Book["status"], string> = {
  "Idea in Development": "In development",
  Writing: "Writing now",
  "Coming Soon": "Coming soon",
  "Launch List Open": "Launch list open",
  "Pre-Order": "Pre-order",
  "Available Now": "Available",
  "Sold Out": "Sold out",
  Archived: "",
};

/** 06-content-media.md §4.1 — status badge is never colour-only. */
export function BookCard({ book }: { book: Book }) {
  return (
    <article className="group relative flex flex-col gap-3">
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-bg-alt">
        {book.coverImage ? (
          <Image src={book.coverImage} alt="" fill sizes="300px" style={{ objectFit: "cover" }} />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center text-lg font-semibold text-ink-muted">
            {book.title}
          </div>
        )}
      </div>
      <span className="w-fit rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-ink">
        {statusBadge[book.status]}
      </span>
      <h3 className="font-semibold text-ink">
        <Link href={`/books/${book.slug}`} className="after:absolute after:inset-0">
          {book.title}
        </Link>
      </h3>
    </article>
  );
}
