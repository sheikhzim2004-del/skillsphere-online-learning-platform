
import CourseCard from "./CourseCard";



export default async function PopularCourses() {

  const res = await fetch("https://skillsphere-server-ttjr.onrender.com/courses");
  const courses = await res.json();
  const topCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 3);
  console.log(topCourses);

  return (
    <div className=" pt-8 pb-16  font-sans">
      {/* Header */}
      <div className="text-center mb-10 space-y-3">

        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Courses</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Top 3 highest-rated courses — curated by AI, loved by learners
        </p>
      </div>


      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
        topCourses.map((topCourse, i) => (
          <CourseCard key={i} topCourse={topCourse} rank={i + 1} />
        ))
        }
      </div>
    </div>
  );
}


