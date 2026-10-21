import type { Metadata } from "next";
import { ApplicationForm } from "@/components/cohort/ApplicationForm";
import { CohortHeader } from "@/components/cohort/CohortHeader";
import { DisciplineCards } from "@/components/cohort/DisciplineCards";
import { HowItWorks } from "@/components/cohort/HowItWorks";

export const metadata: Metadata = { title: "Founding Cohort | Victor Sonde" };

export default function CohortPage() {
  return (
    <main>
      <CohortHeader />
      <DisciplineCards />
      <HowItWorks />
      <ApplicationForm />
    </main>
  );
}
