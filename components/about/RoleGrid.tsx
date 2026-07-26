import type { RoleEntry } from "@/types/models";

/**
 * "Roles at a glance" (02-sitemap.md §3.1) — 9 roles, one-line proof each
 * where supplied. Spec calls for a mobile accordion; a plain responsive
 * grid is used here instead since these are short, non-nested items with
 * nothing to disclose until proof lines exist — revisit if that changes.
 */
interface RoleGridProps {
  roles: RoleEntry[];
}

export function RoleGrid({ roles }: RoleGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
      {roles.map((role) => (
        <li key={role.title} className="flex flex-col gap-1 bg-surface p-6">
          <h3 className="font-semibold text-ink">{role.title}</h3>
          {role.proofLine && <p className="text-sm text-ink-muted">{role.proofLine}</p>}
        </li>
      ))}
    </ul>
  );
}
