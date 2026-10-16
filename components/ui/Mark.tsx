import type { ReactNode } from "react";

/** Orange highlighter underline for a key word on dark backgrounds. */
export function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="bg-[linear-gradient(transparent_62%,rgba(241,152,23,.65)_62%)] px-[.04em]">
      {children}
    </span>
  );
}
