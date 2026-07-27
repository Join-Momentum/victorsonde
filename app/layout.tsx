import type { Metadata } from "next";
import "./globals.css";

// No brand typeface has been confirmed yet (see app/globals.css) — once one
// is chosen, load it here via next/font and point --font-display/--font-body
// at it. Do not add a placeholder Google font in the meantime.
//
// This root layout is deliberately minimal — just the <html>/<body> shell.
// Header/Footer/SkipLink live in app/(site)/layout.tsx instead, because the
// Campaign Landing Template (`/c/[slug]`, 02-sitemap.md §3.10) explicitly
// requires NO global nav, and a nested layout can only add to what an
// ancestor layout renders, never remove it. Route groups — (site) here —
// are how two different page families get two different chrome
// treatments while sharing this one root shell, matching the
// `app/(marketing)/ … (content)/ … (utility)/` grouping already sketched
// in 08-technical.md §5.

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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
