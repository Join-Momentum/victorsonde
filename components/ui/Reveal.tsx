"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** Stagger offset in milliseconds. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Fades and lifts its content in the first time it scrolls into view.
 * Server and client render identical markup; the hidden state only applies under
 * `motion-safe`, so reduced-motion users always see content immediately.
 */
export function Reveal({ delay = 0, className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
      className={cn(
        "motion-safe:transition-[opacity,translate] motion-safe:duration-700 motion-safe:ease-out-soft",
        !shown && "motion-safe:translate-y-4 motion-safe:opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
