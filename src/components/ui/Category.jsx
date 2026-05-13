"use client"

import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const Category = () => {
    // const res = await fetch('https://skillsphere-server-ttjr.onrender.com/courses');
    // const categories = await res.json();
    // console.log(categories, "category detected")

    const [allSelected, setAllSelected] = useState([])
    const [selected, setSelected] = useState([]);

    const fetchData = async () => {
        // const dataFetch = await fetch('https://skillsphere-server-ttjr.onrender.com/courses')
        // const res = dataFetch;
        // const data = await res.json()
        const data = [

            {
                "id": "1",
                "title": "Complete Web Development Bootcamp",
                "instructor": "John Doe",
                "duration": "20 hours",
                "rating": 4.8,
                "level": "Beginner",
                "description": "Learn full-stack web development from scratch using HTML, CSS, JavaScript, React, and Node.js.",
                "image": "https://res.cloudinary.com/dohwbopqu/image/upload/q_auto/f_auto/v1778397821/web-dev_sobfgk.jpg",
                "category": "Development"
            },
            {
                "id": "2",
                "title": "UI/UX Design Masterclass",
                "instructor": "Sarah Smith",
                "duration": "15 hours",
                "rating": 4.7,
                "level": "Intermediate",
                "description": "Master modern UI/UX design principles, wireframing, prototyping, and user research.",
                "image": "https://res.cloudinary.com/dohwbopqu/image/upload/q_auto/f_auto/v1778397792/ui-ux-design_cueerb.jpg",
                "category": "Design"
            },
            {
                "id": "3",
                "title": "Digital Marketing Fundamentals",
                "instructor": "Michael Brown",
                "duration": "12 hours",
                "rating": 4.6,
                "level": "Beginner",
                "description": "Learn SEO, social media marketing, email campaigns, and online branding strategies.",
                "image": "https://res.cloudinary.com/dohwbopqu/image/upload/q_auto/f_auto/v1778396784/digital-marketing_n2co0y.jpg",
                "category": "Marketing"
            },
            {
                "id": "4",
                "title": "Advanced React & Next.js",
                "instructor": "Emily Johnson",
                "duration": "18 hours",
                "rating": 4.9,
                "level": "Advanced",
                "description": "Build modern full-stack applications with React, Next.js, authentication, and APIs.",
                "image": "https://res.cloudinary.com/dohwbopqu/image/upload/f_auto,q_auto/advanch-react-next_sicr6k",
                "category": "Development"
            },
            {
                "id": "5",
                "title": "Graphic Design Essentials",
                "instructor": "David Wilson",
                "duration": "10 hours",
                "rating": 4.5,
                "level": "Beginner",
                "description": "Learn Photoshop, Illustrator, typography, color theory, and branding design basics.",
                "image": "https://res.cloudinary.com/dohwbopqu/image/upload/q_auto/f_auto/v1778397769/graphic-design_ws41as.png",
                "category": "Design"
            },
            {
                "id": "6",
                "title": "Freelancing & Career Growth",
                "instructor": "Sophia Lee",
                "duration": "8 hours",
                "rating": 4.7,
                "level": "Intermediate",
                "description": "Understand freelancing platforms, client communication, portfolio building, and productivity.",
                "image": "https://res.cloudinary.com/dohwbopqu/image/upload/q_auto/f_auto/v1778396794/freelanching_lrja11.png",
                "category": "Career"
            }
        ]

console.log(data, "data check")
setAllSelected(data)
setSelected(data)
    }
useEffect(() => {
    fetchData();
}, [])

console.log(allSelected, selected)

const handleFiltered = (event) => {
    const value = event.target.value;

    if (value === '') {
        setSelected(allSelected);
        return;
    }

    const filterCourses = allSelected.filter(
        cours => cours.category.toLowerCase() === value.toLowerCase()
    );
    setSelected(filterCourses);
}



return (
    <div>
        <select
            onChange={handleFiltered}
            className="px-5 py-3 bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-orange-500 rounded-xl outline-none text-lg"
        >

            <option value="">
                All Courses
            </option>

            <option value="development">
                Development
            </option>

            <option value="design">
                Design
            </option>

            <option value="marketing">
                Marketing
            </option>

            <option value="career">
                Career
            </option>
        </select>
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  px-5 md:px-0'>
            {
                selected.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
            }
        </div>
    </div>
);
};

export default Category;