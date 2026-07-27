import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { complaintsContent } from "@/content/pages/legal";

export const metadata: Metadata = { title: complaintsContent.seo.title, description: complaintsContent.seo.metaDescription };

export default function ComplaintsPage() {
  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Complaints Procedure", url: "/legal/complaints" }])} />
      <LegalPageTemplate {...complaintsContent} />
    </>
  );
}
