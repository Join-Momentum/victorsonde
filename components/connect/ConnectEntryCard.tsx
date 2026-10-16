"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { SubscribeForm } from "@/components/shared/SubscribeForm";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { useVideoModal } from "@/components/video/VideoModalProvider";
import type { ConnectEntry, OfferVisual } from "@/content/connect";
import { disciplineLooks, lightStreaks } from "@/content/disciplineLooks";
import { disciplines } from "@/content/disciplines";
import { cn } from "@/lib/cn";
import { images } from "@/lib/images";
import { OfferPills } from "./OfferPills";

const hex = "[clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]";

/** One storefront entry: the dominant cohort card, a standard offer row, or the email capture. */
export function ConnectEntryCard({ entry }: { entry: ConnectEntry }) {
  if (entry.kind === "hero") return <HeroCard entry={entry} />;
  if (entry.kind === "capture") {
    return (
      <div className="border border-orange/35 bg-orange/[.06] p-5">
        <OfferPills pills={entry.pills} onDark />
        <h2 className="font-display text-[1.08rem] tracking-[-.02em] text-white">{entry.title}</h2>
        <p className="mb-0 mt-1 text-[.88rem] leading-[1.45] text-sand-3">{entry.text}</p>
        <SubscribeForm stacked className="mt-3.5" />
      </div>
    );
  }
  return <OfferRow entry={entry} />;
}

function HeroCard({ entry }: { entry: Extract<ConnectEntry, { kind: "hero" }> }) {
  return (
    <Link
      href={entry.href}
      style={{ backgroundImage: `${lightStreaks}, linear-gradient(125deg, #f19817 0%, #ff4f3a 52%, #c41f8f 100%)` } as CSSProperties}
      className="group relative block overflow-hidden p-6 no-underline shadow-float transition duration-500 ease-out-soft hover:-translate-y-0.5"
    >
      <div className="flex flex-wrap gap-2">
        {entry.pills.map((pill) => (
          <span
            key={pill.label}
            className="bg-black/25 px-2 py-1 font-mono text-[.6rem] uppercase leading-none tracking-[.12em] text-white"
          >
            {pill.label}
          </span>
        ))}
      </div>
      <h2 className="mt-4 font-display text-[1.65rem] font-extrabold leading-[1.02] tracking-[-.035em] text-white">
        {entry.title}
      </h2>
      <p className="mb-0 mt-2 text-[.95rem] leading-[1.45] text-white/85">{entry.text}</p>
      <div aria-hidden className="mt-5 flex gap-1.5">
        {disciplines.map((d) => (
          <span
            key={d.slug}
            style={{ backgroundImage: disciplineLooks[d.slug].gradient }}
            className={cn(
              "grid h-9 w-9 place-items-center font-display text-[.6rem] font-black italic text-white ring-1 ring-white/40",
              hex,
            )}
          >
            {disciplineLooks[d.slug].mono}
          </span>
        ))}
      </div>
      <span className="mt-5 flex min-h-12 items-center justify-center gap-2 bg-dark font-display text-[.95rem] font-semibold text-white transition-colors duration-300 group-hover:bg-ink">
        {entry.cta}
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
      {/* Light sweep on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[130%] -skew-x-[18deg] bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out-soft group-hover:translate-x-[400%]"
      />
    </Link>
  );
}

function OfferRow({ entry }: { entry: Extract<ConnectEntry, { kind: "offer" }> }) {
  const { open } = useVideoModal();
  const external = entry.href?.startsWith("http");
  const className =
    "group flex w-full items-center gap-4 border border-white/10 bg-white/[.03] p-3 pr-4 text-left no-underline transition duration-300 ease-out-soft hover:-translate-y-0.5 hover:border-orange/60 hover:bg-white/[.06]";
  const body: ReactNode = (
    <>
      <Visual visual={entry.visual} />
      <span className="min-w-0 flex-1">
        <OfferPills pills={entry.pills} onDark />
        <span className="block font-display text-[1rem] font-semibold leading-tight tracking-[-.02em] text-white">
          {entry.title}
        </span>
        <span className="mt-0.5 block text-[.85rem] leading-[1.4] text-sand-3">{entry.text}</span>
      </span>
      <span
        aria-hidden
        className="flex-none text-sand-3 transition duration-300 group-hover:translate-x-0.5 group-hover:text-orange"
      >
        {entry.video ? "▶" : external ? "↗" : "→"}
      </span>
    </>
  );

  if (entry.video) {
    const video = entry.video;
    return (
      <button type="button" onClick={() => open(video)} className={className}>
        {body}
      </button>
    );
  }
  return (
    <Link
      href={entry.href ?? "/"}
      className={className}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {body}
    </Link>
  );
}

function Visual({ visual }: { visual: OfferVisual }) {
  const box = "relative grid h-16 w-16 flex-none place-items-center overflow-hidden";
  if ("image" in visual) {
    return (
      <span className={cn(box, "bg-dark-soft")}>
        <Image
          src={images[visual.image]}
          alt=""
          fill
          sizes="64px"
          className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-110"
        />
      </span>
    );
  }
  if (visual.glyph === "disciplines") {
    return (
      <span className={cn(box, "bg-dark-soft")}>
        <span className="grid grid-cols-2 gap-0.5">
          {disciplines.slice(0, 4).map((d) => (
            <span key={d.slug} style={{ backgroundImage: disciplineLooks[d.slug].gradient }} className={cn("h-5 w-5", hex)} />
          ))}
        </span>
      </span>
    );
  }
  if (visual.glyph === "linkedin") {
    return (
      <span className={cn(box, "bg-[#0a66c2] text-white")}>
        <SocialIcon platform="linkedin" className="h-6 w-6" />
      </span>
    );
  }
  return (
    <span className={cn(box, "bg-dark-soft text-orange")}>
      <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 2.5h8.5L19 7v14.5H6z" strokeLinejoin="round" />
        <path d="M14 2.5V7h5M9 12h7M9 15.5h7M9 19h4" />
      </svg>
    </span>
  );
}
