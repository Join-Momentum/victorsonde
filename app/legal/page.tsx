import type { Metadata } from "next";
import { LegalCentre } from "@/components/legal/LegalCentre";

export const metadata: Metadata = { title: "Legal — Victor Sonde" };

export default function LegalPage() {
  return (
    <main>
      <LegalCentre />
    </main>
  );
}
