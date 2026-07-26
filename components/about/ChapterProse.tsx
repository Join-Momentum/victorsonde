import Image from "next/image";
import type { StoryChapter } from "@/types/models";

/**
 * "Origin chapter" prose (02-sitemap.md §3.2). Renders nothing until
 * Victor's real narrative exists in content/pages/story.ts — do not
 * invent biography to fill this in.
 */
interface ChapterProseProps {
  chapters: StoryChapter[];
}

export function ChapterProse({ chapters }: ChapterProseProps) {
  if (chapters.length === 0) return null;

  return (
    <section>
      <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
        <div className="mx-auto flex max-w-prose flex-col gap-16">
          {chapters.map((chapter) => (
            <div key={chapter.heading} className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{chapter.heading}</h2>
              <p className="text-lg text-ink opacity-80">{chapter.body}</p>
              {chapter.media && (
                <div className="relative mt-4 aspect-[3/2] w-full overflow-hidden rounded-lg">
                  <Image src={chapter.media} alt="" fill sizes="768px" style={{ objectFit: "cover" }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
