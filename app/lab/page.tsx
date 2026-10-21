import type { Metadata } from "next";
import { FounderRationale } from "@/components/lab/FounderRationale";
import { LabBeneficiaries } from "@/components/lab/LabBeneficiaries";
import { LabHeader } from "@/components/lab/LabHeader";
import { LabImpact } from "@/components/lab/LabImpact";
import { LabMethod } from "@/components/lab/LabMethod";
import { LabPartners } from "@/components/lab/LabPartners";
import { LabProblem } from "@/components/lab/LabProblem";

export const metadata: Metadata = { title: "Decision Intelligence Lab | Victor Sonde" };

export default function LabPage() {
  return (
    <main>
      <LabHeader />
      <FounderRationale />
      <LabProblem />
      <LabMethod />
      <LabBeneficiaries />
      <LabPartners />
      <LabImpact />
    </main>
  );
}
