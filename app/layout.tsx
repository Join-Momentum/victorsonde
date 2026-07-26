import type { Metadata } from "next";
import "./globals.css";
import { SkipLink } from "@/components/site/SkipLink";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

// No brand typeface has been confirmed yet (see app/globals.css) — once one
// is chosen, load it here via next/font and point --font-display/--font-body
// at it. Do not add a placeholder Google font in the meantime.

export const metadata: Metadata = {
  title: {
    default: "Victor Sonde — Building People, Platforms and Institutions for Transformative Impact",
    template: "%s | Victor Sonde",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
