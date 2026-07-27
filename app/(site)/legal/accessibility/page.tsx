import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { accessibilityContent } from "@/content/pages/legal";

export const metadata: Metadata = { title: accessibilityContent.seo.title, description: accessibilityContent.seo.metaDescription };

export default function AccessibilityPage() {
  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Accessibility Statement", url: "/legal/accessibility" }])} />
      <LegalPageTemplate {...accessibilityContent} />
    </>
  );
}
