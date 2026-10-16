import { Archivo, IBM_Plex_Mono, Newsreader } from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
});

/** Variable font: covers the 300–600 weights and the 6–72 optical-size axis the design uses. */
export const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-newsreader",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export const fontVariables = [archivo.variable, newsreader.variable, plexMono.variable].join(" ");
