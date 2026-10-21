import type { Metadata } from "next";
import Link from "next/link";
import { BandBackdrop } from "@/components/ui/BandBackdrop";
import { ConnectProfile } from "@/components/connect/ConnectProfile";
import { ConnectStorefront } from "@/components/connect/ConnectStorefront";

export const metadata: Metadata = {
  title: "Connect | Victor Sonde",
  description: "The Founding Cohort, the Decision Intelligence Lab, the newsletter and every way to work with Victor Sonde.",
};

/** Link-in-bio landing for visitors arriving from social profiles. */
export default function ConnectPage() {
  return (
    <main data-tone="dark" className="relative isolate overflow-hidden bg-dark">
      <BandBackdrop glow="center" />
      <div className="mx-auto max-w-[540px] px-4 pb-[clamp(56px,8vw,96px)] pt-[clamp(40px,6vw,72px)] sm:px-6">
        <ConnectProfile />
        <ConnectStorefront />
        <p className="mb-0 mt-10 text-center font-mono text-[.66rem] uppercase tracking-[.16em] text-muted-dk">
          <Link href="/" className="text-sand-2 no-underline transition-colors hover:text-orange">
            victorsonde.com →
          </Link>
        </p>
      </div>
    </main>
  );
}
