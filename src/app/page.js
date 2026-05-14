import Header from "@/components/shared/Banner";
import LearningTips from "@/components/ui/LearningTips";
import PopularCourses from "@/components/ui/PopularCourses";


export default function Home() {
  return (
    <div>
      <Header></Header>
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
    </div>
  );
}
