/**
 * Skip-to-content — must be the first focusable element on every page
 * (10-quality-and-launch.md §1). Visually hidden until focused.
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-(--z-toast) focus:rounded-md focus:bg-brand-primary focus:px-4 focus:py-2 focus:text-on-primary"
    >
      Skip to content
    </a>
  );
}
