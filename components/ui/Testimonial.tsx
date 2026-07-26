import Image from "next/image";
import type { Testimonial as TestimonialData } from "@/types/models";

/**
 * 07-design-system.md §5.10. Renders only `permission: true` docs — an
 * empty/unpermissioned list means this renders nothing, not a placeholder.
 */
interface TestimonialProps {
  testimonial: TestimonialData;
  variant?: "card" | "feature";
}

export function Testimonial({ testimonial, variant = "card" }: TestimonialProps) {
  if (!testimonial.permission) return null;

  const { quote, person, image } = testimonial;

  return (
    <figure
      className={
        variant === "feature"
          ? "flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10"
          : "flex flex-col gap-4 rounded-lg border border-border bg-surface p-6"
      }
    >
      <blockquote className={variant === "feature" ? "text-2xl font-medium text-ink sm:text-3xl" : "text-base text-ink"}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        {image && (
          <Image src={image} alt="" width={48} height={48} className="h-12 w-12 shrink-0 rounded-full object-cover" />
        )}
        <div className="text-sm">
          <p className="font-semibold text-ink">{person.name}</p>
          {(person.role || person.org) && (
            <p className="text-ink-muted">
              {person.role}
              {person.role && person.org ? ", " : ""}
              {person.org}
            </p>
          )}
        </div>
      </figcaption>
    </figure>
  );
}

/**
 * List wrapper — renders nothing if no entry has `permission: true`. A
 * full auto-advancing carousel (pause control, reduced-motion handling)
 * is worth building once there are enough real testimonials to need one;
 * for 0–2 items a static row is simpler and equally correct.
 */
interface TestimonialSectionProps {
  testimonials: TestimonialData[];
  heading?: string;
}

export function TestimonialSection({ testimonials, heading }: TestimonialSectionProps) {
  const permissioned = testimonials.filter((t) => t.permission);
  if (permissioned.length === 0) return null;

  return (
    <section>
      <div className="mx-auto max-w-wide px-6 py-16 sm:py-24">
        {heading && <h2 className="mb-10 text-2xl font-semibold text-ink sm:text-3xl">{heading}</h2>}
        <div className="grid gap-8 sm:grid-cols-2">
          {permissioned.map((t) => (
            <Testimonial key={t.slug} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
