import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import { StructuredData, breadcrumbList } from "@/components/seo/StructuredData";
import { cookiesContent } from "@/content/pages/legal";

export const metadata: Metadata = { title: cookiesContent.seo.title, description: cookiesContent.seo.metaDescription };

export default function CookiesPage() {
  return (
    <>
      <StructuredData data={breadcrumbList([{ name: "Home", url: "/" }, { name: "Cookie Policy", url: "/legal/cookies" }])} />
      <LegalPageTemplate {...cookiesContent} />
    </>
  );
}
