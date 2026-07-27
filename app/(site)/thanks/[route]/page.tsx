import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { thankYouContent } from "@/content/thanks";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return Object.keys(thankYouContent).map((route) => ({ route }));
}

export default async function ThankYouPage({ params }: { params: Promise<{ route: string }> }) {
  const { route } = await params;
  const content = thankYouContent[route];
  if (!content) notFound();

  return (
    <section className="flex flex-1 items-center">
      <div className="mx-auto max-w-wide px-6 py-24 text-center sm:py-32">
        <h1 className="text-4xl font-semibold text-ink sm:text-5xl">{content.heading}</h1>
        <p className="mt-4 text-lg text-ink-muted">{content.body}</p>
        {content.sla && <p className="mt-2 text-sm text-ink-muted">{content.sla}</p>}
        <div className="mt-10">
          <Button href={content.nextCta.href}>{content.nextCta.label}</Button>
        </div>
      </div>
    </section>
  );
}
