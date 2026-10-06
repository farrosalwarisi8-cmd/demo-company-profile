import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { AboutStory } from "@/components/sections/about/about-story";
import { AboutVisionMission } from "@/components/sections/about/about-vision";
import { AboutTimeline } from "@/components/sections/about/about-timeline";
import { AboutTeam } from "@/components/sections/about/about-team";
import { AboutLegal } from "@/components/sections/about/about-legal";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Kenali ${companyInfo.name} — perusahaan konstruksi yang telah dipercaya lebih dari 15 tahun untuk mewujudkan infrastruktur berkualitas di Indonesia.`,
};

export default function TentangKamiPage() {
  return (
    <>
      <PageHeader
        title="Tentang Kami"
        description="Kenali lebih dekat siapa, bagaimana, dan mengapa kami membangun."
        breadcrumb={[{ label: "Tentang Kami" }]}
        motif="building"
      />
      <AboutStory />
      <AboutVisionMission />
      <AboutTimeline />
      <AboutTeam />
      <AboutLegal />
    </>
  );
}