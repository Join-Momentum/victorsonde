/** Trailing arrow that nudges right when its parent button is hovered. */
export function Arrow() {
  return (
    <span aria-hidden className="transition-transform duration-300 ease-out-soft group-hover/btn:translate-x-1">
      →
    </span>
  );
}
