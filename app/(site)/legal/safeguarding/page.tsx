import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { safeguardingContent } from "@/content/pages/legal";

export const metadata: Metadata = { title: safeguardingContent.seo.title, description: safeguardingContent.seo.metaDescription };

export default function SafeguardingPage() {
  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Safeguarding Policy", url: "/legal/safeguarding" }])} />
      <LegalPageTemplate {...safeguardingContent} />
    </>
  );
}
