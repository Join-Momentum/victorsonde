import { Button } from "@/components/ui/Button";

/**
 * 07-design-system.md §5.13 — "no-content: icon, message, action; actionable
 * next step always." Used across every hub whose content array is
 * currently empty (never render a blank grid —02-sitemap.md §1).
 */
interface EmptyStateProps {
  message: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({ message, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border border-dashed border-border px-6 py-16 text-center">
      <p className="max-w-md text-ink-muted">{message}</p>
      {actionLabel && actionHref && (
        <Button href={actionHref} variant="ghost" size="sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
