import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { termsContent } from "@/content/pages/legal";

export const metadata: Metadata = { title: termsContent.seo.title, description: termsContent.seo.metaDescription };

export default function TermsPage() {
  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Terms of Use", url: "/legal/terms" }])} />
      <LegalPageTemplate {...termsContent} />
    </>
  );
}
