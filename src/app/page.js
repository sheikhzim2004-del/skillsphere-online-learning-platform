import Header from "@/components/shared/Banner";
import LearningTips from "@/components/ui/LearningTips";
import PopularCourses from "@/components/ui/PopularCourses";
import TopInstructors from "@/components/ui/TopInstructors";


export default function Home() {
  return (
    <div>
      <Header></Header>
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
      <TopInstructors></TopInstructors>
    </div>
  );
}
