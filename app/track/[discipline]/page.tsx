import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrackDetail } from "@/components/track/TrackDetail";
import { TrackHeader } from "@/components/track/TrackHeader";
import { disciplines, findDiscipline } from "@/content/disciplines";

export function generateStaticParams() {
  return disciplines.map((d) => ({ discipline: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/track/[discipline]">): Promise<Metadata> {
  const discipline = findDiscipline((await params).discipline);
  return { title: `${discipline?.title ?? "Track"} | Victor Sonde` };
}

export default async function TrackPage({ params }: PageProps<"/track/[discipline]">) {
  const discipline = findDiscipline((await params).discipline);
  if (!discipline) notFound();

  return (
    <main>
      <TrackHeader discipline={discipline} />
      <TrackDetail discipline={discipline} />
    </main>
  );
}
