"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";



const coursesData = async () => {
  const coursesRes = await fetch("https://skillsphere-server-ttjr.onrender.com/courses");
  const coursesJson = await coursesRes.json();
  console.log("Fetched courses:", coursesJson);
  return coursesJson;
}

// jokhon kono data loading hobe tokhon blanck card show korbe.
const SkeletonCard = () => (
  <div className="bg-slate-900 rounded-2xl border border-slate-700/60 overflow-hidden animate-pulse">
    <div className="h-44 bg-slate-800" />
    <div className="p-5 space-y-4">
      <div className="h-4 bg-slate-700 rounded w-3/4" />
      <div className="h-4 bg-slate-700 rounded w-1/2" />
      <div className="flex gap-2">
        {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 bg-slate-700 rounded" />)}
      </div>
      <div className="h-10 bg-slate-700 rounded-xl" />
    </div>
  </div>
);

export default function PopularCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const coursesJson = await coursesData();
        setCourses(coursesJson);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-[#080d0f] p-8 font-sans">
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
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? [1, 2, 3].map(i => <SkeletonCard key={i} />)
          : courses.map((course, i) => (
              <CourseCard key={i} course={course} rank={i + 1} />
            ))
        }
      </div>
    </div>
  );
}