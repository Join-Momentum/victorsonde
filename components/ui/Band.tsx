import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { BandBackdrop } from "./BandBackdrop";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export type Tone = "dark" | "ink" | "paper" | "white";

const tones: Record<Tone, string> = {
  dark: "bg-dark text-snow",
  ink: "bg-ink text-snow",
  paper: "bg-paper",
  white: "bg-white",
};

type Props = {
  tone: Tone;
  as?: "section" | "header";
  /** Vertical padding; defaults to the standard band rhythm. */
  padding?: string;
  container?: "wrap" | "wide" | "narrow";
  containerClassName?: string;
  /** Glow position on dark bands. */
  glow?: "top-right" | "top-left" | "center" | "none";
  /** Hairline grid behind dark bands (used on page headers). */
  grid?: boolean;
  className?: string;
  children: ReactNode;
};

/** A full-bleed coloured page band with a revealed, centred content column. */
export function Band({
  tone,
  as: Tag = "section",
  padding = "py-(--band-y)",
  container = "wrap",
  containerClassName,
  glow,
  grid,
  className,
  children,
}: Props) {
  const dark = tone === "dark" || tone === "ink";
  // Page headers are already on screen at load, so they get the CSS entrance instead of the scroll reveal.
  const content =
    Tag === "header" ? (
      <Container size={container} className={cn("motion-safe:animate-rise", containerClassName)}>
        {children}
      </Container>
    ) : (
      <Reveal>
        <Container size={container} className={containerClassName}>
          {children}
        </Container>
      </Reveal>
    );
  return (
    <Tag data-tone={tone} className={cn("relative isolate overflow-hidden", tones[tone], padding, className)}>
      {dark && <BandBackdrop glow={glow} grid={grid} />}
      {content}
    </Tag>
  );
}
