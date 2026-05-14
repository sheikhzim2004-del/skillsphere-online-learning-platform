"use client"

import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import { Input } from '@heroui/react';

const Category = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch("https://skillsphere-server-ttjr.onrender.com/courses")
            .then(res => res.json())
            .then(data => setAllCourses(data));
    }, []);

    const filteredCourses = allCourses
        .filter(c => selectedCategory === '' || c.category.toLowerCase() === selectedCategory.toLowerCase())
        .filter(c => c.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            {/* Search and Filter */}
            <div className='flex gap-4 justify-center py-6'>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-5 py-3 bg-zinc-100 dark:bg-zinc-800 border border-transparent focus:border-orange-500 rounded-xl outline-none text-lg"
                >
                    <option value="">All Courses</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="career">Career</option>
                </select>

                <Input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-64 text-lg font-bold"
                    placeholder="Search courses..."
                />
            </div>

            {/* input and category wise courses card */}
            <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-0 pb-10'>
                {filteredCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default Category;