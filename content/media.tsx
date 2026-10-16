import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { EvidenceRow } from "@/components/ui/EvidenceFigure";
import { Todo } from "@/components/ui/Todo";
import { images } from "@/lib/images";

export type MediaCategory = "speaking" | "programmes" | "portraits" | "brand" | "video";

export const mediaFilters: { value: MediaCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "speaking", label: "Speaking" },
  { value: "programmes", label: "Programmes" },
  { value: "portraits", label: "Portraits" },
  { value: "brand", label: "Brand" },
  { value: "video", label: "Video" },
];

type Base = { id: string; category: MediaCategory };

export type MediaPhoto = Base & {
  kind: "photo";
  tab: string;
  title: string;
  image: StaticImageData;
  alt: string;
  tall?: boolean;
  rows: EvidenceRow[];
};

export type MediaLogo = Base & {
  kind: "logo";
  tab: string;
  title: string;
  image: StaticImageData;
  alt: string;
  surface: "dark" | "white" | "paper";
  /** Panel padding and logo width differ between wide and stacked lockups. */
  panel: "wide" | "stacked" | "stacked-roomy";
  rows: EvidenceRow[];
};

export type MediaVideo = Base & {
  kind: "video";
  video: string;
  thumbnail: StaticImageData;
  meta: ReactNode;
  title: string;
};

export type MediaItem = MediaPhoto | MediaLogo | MediaVideo;

const tbc = <Todo>To confirm</Todo>;

export const mediaItems: MediaItem[] = [
  {
    id: "M-01", kind: "photo", category: "speaking", tab: "M-01",
    image: images.speakingLectern, alt: "Victor Sonde speaking at a lectern",
    title: "Keynote — evidence-based employability",
    rows: [{ label: "Where", value: <Todo>Event &amp; date</Todo> }, { label: "Use", value: "Approved for press" }],
  },
  {
    id: "M-02", kind: "photo", category: "programmes", tab: "M-02",
    image: images.taskForceBriefing, alt: "Joint Task Force briefing",
    title: "Joint Task Force briefing",
    rows: [{ label: "What", value: '"Working together for a safer future"' }, { label: "Where", value: tbc }],
  },
  {
    id: "M-03", kind: "photo", category: "portraits", tab: "M-03", tall: true,
    image: images.fullLengthPortrait, alt: "Full-length portrait of Victor Sonde",
    title: "Full-length portrait",
    rows: [{ label: "Use", value: "Event programmes, speaker pages" }],
  },
  {
    id: "M-04", kind: "logo", category: "brand", tab: "M-04", surface: "dark", panel: "wide",
    image: images.logoWhite, alt: "Victor Sonde logo, white",
    title: "Logo — reversed",
    rows: [{ label: "Use", value: "Dark backgrounds only" }],
  },
  {
    id: "M-05", kind: "photo", category: "programmes", tab: "M-05",
    image: images.workingSession, alt: "Working session",
    title: "Programme working session",
    rows: [{ label: "Role", value: "Product & delivery lead" }],
  },
  {
    id: "M-06", kind: "photo", category: "portraits", tab: "M-06", tall: true,
    image: images.editorialHeadshot, alt: "Portrait of Victor Sonde",
    title: "Editorial headshot",
    rows: [{ label: "Use", value: "Press, interviews, bylines" }],
  },
  {
    id: "M-07", kind: "logo", category: "brand", tab: "M-07", surface: "white", panel: "wide",
    image: images.logoPrimary, alt: "Victor Sonde primary logo",
    title: "Logo — primary",
    rows: [{ label: "Use", value: "Light backgrounds · #F19817 + #241A18" }],
  },
  {
    id: "M-08", kind: "photo", category: "speaking", tab: "M-08",
    image: images.presentingLectern, alt: "Workshop facilitation",
    title: "Workshop facilitation",
    rows: [{ label: "Where", value: tbc }],
  },
  {
    id: "V-meet", kind: "video", category: "video", video: "Meet Victor",
    thumbnail: images.meetVictorThumb, meta: "Video · to supply", title: "Meet Victor",
  },
  {
    id: "M-09", kind: "photo", category: "portraits", tab: "M-09", tall: true,
    image: images.environmentalPortrait, alt: "Portrait of Victor Sonde",
    title: "Environmental portrait",
    rows: [{ label: "Use", value: "Founder story, About page" }],
  },
  {
    id: "M-10", kind: "photo", category: "portraits", tab: "M-10", tall: true,
    image: images.standingPortrait, alt: "Portrait of Victor Sonde",
    title: "Standing portrait",
    rows: [{ label: "Use", value: "Cutout candidate for hero treatments" }],
  },
  {
    id: "M-11", kind: "photo", category: "portraits", tab: "M-11",
    image: images.conferencePortrait, alt: "Portrait of Victor Sonde",
    title: "Conference portrait",
    rows: [{ label: "Use", value: "General web and social" }],
  },
  {
    id: "M-15", kind: "logo", category: "brand", tab: "M-15", surface: "dark", panel: "stacked",
    image: images.joinMomentumStackedDark, alt: "Join Momentum Inc, stacked lockup",
    title: "Join Momentum — stacked",
    rows: [{ label: "Use", value: "Dark backgrounds · square and vertical formats" }],
  },
  {
    id: "M-16", kind: "logo", category: "brand", tab: "M-16", surface: "white", panel: "stacked",
    image: images.joinMomentumStackedLight, alt: "Join Momentum Inc, stacked lockup",
    title: "Join Momentum — primary stacked",
    rows: [{ label: "Use", value: "Light backgrounds · #D21215 mark, #0F1235 wordmark" }],
  },
  {
    id: "M-12", kind: "logo", category: "brand", tab: "M-12", surface: "paper", panel: "stacked-roomy",
    image: images.logoStacked, alt: "Victor Sonde stacked logo",
    title: "Logo — stacked",
    rows: [{ label: "Use", value: "Square formats, event programmes" }],
  },
  {
    id: "M-13", kind: "photo", category: "portraits", tab: "M-13", tall: true,
    image: images.neutralPortrait, alt: "Portrait of Victor Sonde",
    title: "Full-length, neutral background",
    rows: [{ label: "Use", value: "Speaker listings" }],
  },
  {
    id: "M-14", kind: "photo", category: "portraits", tab: "M-14",
    image: images.editorialPortrait, alt: "Portrait of Victor Sonde",
    title: "Editorial portrait",
    rows: [{ label: "Use", value: "Press, partner pages" }],
  },
  {
    id: "V-reel", kind: "video", category: "video", video: "Speaking reel",
    thumbnail: images.speakingLectern, meta: "Reel · to supply", title: "Speaking highlights",
  },
];
