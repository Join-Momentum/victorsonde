import type { ReactNode } from "react";

/** Marks copy that still needs the client's confirmation. */
export function Todo({ children }: { children: ReactNode }) {
  return (
    <span className="border-b-[1.5px] border-dashed border-orange-ink text-orange-ink inv:border-orange inv:text-orange">
      {children}
    </span>
  );
}
