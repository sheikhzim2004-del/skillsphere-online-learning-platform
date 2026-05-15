import ScrollSection from "@/components/ScrollSection";
import Banner from "@/components/shared/Banner";
import LearningTips from "@/components/ui/LearningTips";
import PopularCourses from "@/components/ui/PopularCourses";
import TopInstructors from "@/components/ui/TopInstructors";


export default function Home() {
  return (
    <div>
      <ScrollSection>
        <Banner></Banner>
      </ScrollSection>

      <ScrollSection>
        <PopularCourses></PopularCourses>
      </ScrollSection>

      <ScrollSection>
        <LearningTips></LearningTips>
      </ScrollSection>

      <ScrollSection>
        <TopInstructors></TopInstructors>
      </ScrollSection>
    </div>
  );
}
