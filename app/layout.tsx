import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Footer } from "@/components/layout/Footer";
import { SiteNav } from "@/components/layout/SiteNav";
import { Topbar } from "@/components/layout/Topbar";
import { VideoModalProvider } from "@/components/video/VideoModalProvider";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Sonde — design preview v2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={fontVariables}>
      <body>
        <VideoModalProvider>
          <Topbar />
          <SiteNav />
          <ViewTransition>
            {children}
            <Footer />
          </ViewTransition>
        </VideoModalProvider>
      </body>
    </html>
  );
}
