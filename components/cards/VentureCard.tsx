import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import type { BuildId } from "@/types/models";
import { getBuild } from "@/content/builds";

/**
 * The shared card component behind VentureCard/InitiativeCard/ServiceCard
 * (07-design-system.md §5.6) — one component, four variants, rather than
 * three near-duplicate components.
 */
export type CardVariant = "standard" | "feature" | "muted" | "mini";

interface VentureCardProps {
  logo?: string;
  title: string;
  purposeLine: string;
  builds: BuildId[];
  audienceLine?: string;
  statusLabel?: string;
  href: string;
  image?: string;
  variant?: CardVariant;
}

export function VentureCard({
  logo,
  title,
  purposeLine,
  builds,
  audienceLine,
  statusLabel,
  href,
  image,
  variant = "standard",
}: VentureCardProps) {
  return (
    <div
      className={clsx(
        "group relative flex h-full flex-col gap-3 rounded-lg border border-border p-6 transition-shadow duration-(--dur-base)",
        variant === "feature" && "sm:flex-row sm:items-center sm:gap-8 sm:p-8",
        variant === "muted" ? "bg-bg-alt" : "bg-surface hover:shadow-2",
        variant === "mini" && "gap-2 p-4",
      )}
    >
      {image && variant === "feature" && (
        <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-md sm:h-32 sm:w-48">
          <Image src={image} alt="" fill sizes="192px" style={{ objectFit: "cover" }} />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3">
        {logo && !variant.includes("mini") && (
          <Image src={logo} alt="" width={120} height={32} className="h-8 w-auto" />
        )}

        <div className="flex items-center justify-between gap-2">
          <h3 className={clsx("font-semibold text-ink", variant === "mini" ? "text-base" : "text-xl")}>
            <Link href={href} className="after:absolute after:inset-0">
              {title}
            </Link>
          </h3>
          {statusLabel && (
            <span className="shrink-0 rounded-full bg-brand-primary-tint px-3 py-1 text-xs font-medium text-brand-dark">
              {statusLabel}
            </span>
          )}
        </div>

        {variant !== "mini" && <p className="text-sm text-ink-muted">{purposeLine}</p>}

        {builds.length > 0 && variant !== "mini" && (
          <ul className="flex flex-wrap gap-2">
            {builds.map((id) => {
              const build = getBuild(id);
              return build ? (
                <li key={id} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-ink-muted">
                  {build.name}
                </li>
              ) : null;
            })}
          </ul>
        )}

        {audienceLine && variant !== "mini" && <p className="text-xs text-ink-muted">{audienceLine}</p>}
      </div>
    </div>
  );
}
