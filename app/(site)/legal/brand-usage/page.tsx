import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { brandUsageContent } from "@/content/pages/legal";

export const metadata: Metadata = { title: brandUsageContent.seo.title, description: brandUsageContent.seo.metaDescription };

export default function BrandUsagePage() {
  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Media & Brand Usage", url: "/legal/brand-usage" }])} />
      <LegalPageTemplate {...brandUsageContent} />
    </>
  );
}
