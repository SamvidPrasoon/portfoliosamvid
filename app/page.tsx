import { ApproachSection } from "@/components/ApproachSection";
import { DetailSectionOne } from "@/components/DetailSectionOne";
import { FooterSection } from "@/components/FooterSection";
import { Hero } from "@/components/Hero";
import { RecentProjectsSection } from "@/components/RecentProjectsSection";
import { WorkExperienceSection } from "@/components/WorkExperience";

export default function Home() {
  return (
    <div>
      <Hero />
      <DetailSectionOne />
      <RecentProjectsSection />
      <WorkExperienceSection />
      <ApproachSection />
      <FooterSection />
    </div>
  );
}
