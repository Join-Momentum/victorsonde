import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { privacyContent } from "@/content/pages/legal";

export const metadata: Metadata = { title: privacyContent.seo.title, description: privacyContent.seo.metaDescription };

export default function PrivacyPage() {
  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Privacy Policy", url: "/legal/privacy" }])} />
      <LegalPageTemplate {...privacyContent} />
    </>
  );
}
