import type { Metadata } from "next";
import { AboutHeader } from "@/components/about/AboutHeader";
import { AboutStory } from "@/components/about/AboutStory";
import { CareerTurns } from "@/components/about/CareerTurns";

export const metadata: Metadata = { title: "About | Victor Sonde" };

export default function AboutPage() {
  return (
    <main>
      <AboutHeader />
      <AboutStory />
      <CareerTurns />
    </main>
  );
}
