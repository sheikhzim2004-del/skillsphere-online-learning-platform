import Category from '@/components/ui/Category';
import CourseList from '@/components/ui/CourseList';
import React from 'react';

const AllCourses = async () => {
    const res = await fetch("https://skillsphere-server-ttjr.onrender.com/courses");
    const courses = await res.json();
    console.log(courses)
    return (
        <div>
            <h1 className="text-center py-10 text-4xl font-extrabold text-white tracking-tight">
                All <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Courses</span>
            </h1>
            {/* <CourseList courses={courses}></CourseList> */}
            <Category></Category>

            {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10 px-6 md:px-0'>
                {
                    courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                }
            </div> */}
        </div>
    );
};

export default AllCourses;