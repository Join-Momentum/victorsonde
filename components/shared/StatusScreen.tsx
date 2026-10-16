import type { ReactNode } from "react";
import { Band } from "@/components/ui/Band";
import { Display } from "@/components/ui/Display";
import { Lede } from "@/components/ui/Lede";

type Props = {
  tone: "dark" | "ink";
  eyebrow: ReactNode;
  title: string;
  titleSize: "d1" | "d2";
  lede: ReactNode;
  width?: string;
  children: ReactNode;
};

/** Full-height centred message for confirmations and errors. */
export function StatusScreen({ tone, eyebrow, title, titleSize, lede, width = "max-w-[680px]", children }: Props) {
  return (
    <Band
      tone={tone}
      className="grid min-h-[70vh] place-items-center text-center"
      containerClassName={width}
    >
      {eyebrow}
      <Display as="h1" size={titleSize} className="mb-4 mt-5 text-white">
        {title}
      </Display>
      <Lede inverse>{lede}</Lede>
      {children}
    </Band>
  );
}
