import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltLeft, FaStar } from 'react-icons/fa';

const AllCourseDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://skillsphere-server-ttjr.onrender.com/courses");
    const courses = await res.json();
    const course = courses.find(c => c.id === id);
    const {image, category, description, level, rating, duration, instructor, title} =course;

    console.log(course)

    return (
        <div>
            <div className="min-h-screen bg-[#080d0f] text-white flex items-center justify-center p-6">
                <div className="max-w-4xl w-full bg-[#0f1b1f] border border-teal-500/30 rounded-2xl shadow-lg overflow-hidden">
                {/* back btn */}
                <Link href={"/all-courses"}><button className='bg-teal-500 hover:bg-teal-400 px-4 py-2 rounded-xl cursor-pointer flex items-center gap-2 mt-8 ml-8'><FaLongArrowAltLeft /> Back</button></Link>

                    {/* Image */}
                    <Image
                        src={image}
                        alt="UI/UX Design"
                        className="rounded-2xl mx-auto mt-4 border border-teal-300 hover:shadow-lg transition duration-300 hover:scale-102 hover:shadow-amber-700 h-90 object-cover"
                        height={500}
                        width={500}
                    ></Image>
                    

                    {/* Content */}
                    <div className="p-6 space-y-4">

                        <span className="text-xs bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full">
                            {category}
                        </span>

                        <h1 className="text-3xl font-bold text-teal-300">
                            {title}
                        </h1>

                        <p className="text-gray-300">
                            {description}
                        </p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                            <div className="bg-[#081417] p-3 rounded-lg border border-teal-500/20">
                                <p className="text-gray-400 text-sm">Instructor</p>
                                <p className="text-teal-200 font-semibold">{instructor}</p>
                            </div>

                            <div className="bg-[#081417] p-3 rounded-lg border border-teal-500/20">
                                <p className="text-gray-400 text-sm">Duration</p>
                                <p className="text-teal-200 font-semibold">{duration}</p>
                            </div>

                            <div className="bg-[#081417] p-3 rounded-lg border border-teal-500/20">
                                <p className="text-gray-400 text-sm">Rating</p>
                                <p className="text-teal-200 font-semibold flex items-center justify-start gap-1"><FaStar className='text-yellow-500'/>{rating}</p>
                            </div>

                            <div className="bg-[#081417] p-3 rounded-lg border border-teal-500/20">
                                <p className="text-gray-400 text-sm">Level</p>
                                <p className="text-teal-200 font-semibold">{level}</p>
                            </div>

                            <div className="bg-[#081417] p-3 rounded-lg border border-teal-500/20 col-span-2 md:col-span-1">
                                <p className="text-gray-400 text-sm">Category</p>
                                <p className="text-teal-200 font-semibold">{category}</p>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="mt-6 w-full bg-teal-500 hover:bg-teal-400 text-black font-semibold py-3 rounded-xl transition">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourseDetailsPage;