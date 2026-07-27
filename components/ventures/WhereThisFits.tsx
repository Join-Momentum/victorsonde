import type { BuildId } from "@/types/models";
import { getBuild } from "@/content/builds";

/**
 * The "Where this fits" connective strip every venture page opens with
 * (01-strategy.md §2.4, 05-key-pages.md §1). Only renders the Build
 * tags plus an optional narrative line — connective claims about how
 * ventures relate to each other need verification before publishing
 * (01-strategy.md §2.4: "[VERIFIED CONTENT REQUIRED: confirm actual
 * operational relationships between ventures]"), so `narrative` stays
 * optional and unset by default rather than guessed at.
 */
interface WhereThisFitsProps {
  builds: BuildId[];
  narrative?: string;
}

export function WhereThisFits({ builds, narrative }: WhereThisFitsProps) {
  return (
    <div className="border-b border-border bg-bg-alt">
      <div className="mx-auto flex max-w-wide flex-wrap items-center gap-4 px-6 py-4">
        <span className="text-xs font-semibold tracking-wide text-ink-muted uppercase">Where this fits</span>
        <div className="flex flex-wrap gap-2">
          {builds.map((id) => {
            const build = getBuild(id);
            return build ? (
              <span key={id} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-ink">
                {build.name}
              </span>
            ) : null;
          })}
        </div>
        {narrative && <span className="text-sm text-ink-muted">{narrative}</span>}
      </div>
    </div>
  );
}
