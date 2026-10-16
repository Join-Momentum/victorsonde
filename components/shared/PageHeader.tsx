import type { ReactNode } from "react";
import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";
import { cn } from "@/lib/cn";

type Props = {
  tone: "dark" | "ink" | "paper";
  /** Eyebrow above the title: a Label, back link, badge, etc. */
  eyebrow: ReactNode;
  title: ReactNode;
  /** Width and margin classes for the title. */
  titleClassName?: string;
  titleSize?: "d1" | "d2";
  lede?: ReactNode;
  ledeClassName?: string;
  padding?: string;
  container?: "wide" | "wrap" | "narrow";
  /** Anything after the lede, e.g. an action row. */
  children?: ReactNode;
};

/** Standard inner-page header: eyebrow, large title, lede and optional actions. */
export function PageHeader({
  tone,
  eyebrow,
  title,
  titleClassName = "mt-3.5 mb-[22px] max-w-[16ch]",
  titleSize = "d1",
  lede,
  ledeClassName = "max-w-[60ch]",
  padding,
  container = "wide",
  children,
}: Props) {
  const dark = tone !== "paper";
  return (
    <Band tone={tone} as="header" container={container} padding={padding}>
      {eyebrow}
      <Display as="h1" size={titleSize} className={cn(dark && "text-white", titleClassName)}>
        {title}
      </Display>
      {lede && (
        <Lede inverse={dark} className={ledeClassName}>
          {lede}
        </Lede>
      )}
      {children}
    </Band>
  );
}
