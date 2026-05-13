
import Image from "next/image";
import bannerImg from "@/assets/banner-image.png";
import { IoRocket } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const label = [
  { number: "200+", label: "Courses" },
  { number: "50K+", label: "Students" },
  { number: "4.9★", label: "Avg Rating" },
];

export default async function Banner() {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!session){
    return null;
  }

  return (
    <section className="relative w-full min-h-\[500px\] bg-[#080d0f] overflow-hidden flex items-center">

      <div className="absolute top-1/2 left-[15%] -translate-y-1/2 w-72 h-72 bg-teal-400 opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-80 h-80 bg-teal-400 opacity-5 rounded-full blur-3xl pointer-events-none" />


      {/* Main container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Content container */}
        <div className="flex-1 flex flex-col gap-6 order-2 md:order-1">

          {/* Eyebrow pill */}
          <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-teal-400/30 bg-teal-400/10 text-teal-300 text-sm font-medium">
            <FaUserGraduate /> Online Learning Platform
          </span>

          {/* Headline */}
          <h1 className="text-4xl lg:text-6xl md:text-5xl font-bold leading-tight">
            <span className="text-teal-300">Upgrade Your</span>
            <br />
            <span className="text-yellow-400">Skills Today</span>
          </h1>

          {/* Subtext */}
          <p className="text-teal-200/70 text-lg max-w-md">
            Learn from Industry Experts · Anytime, Anywhere.
            Start your journey with world-class courses today.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 mt-2">
            {label.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-6 py-3 rounded-xl border border-teal-400/20 bg-teal-400/10 min-w-[90px]"
              >
                <span className="text-yellow-400 text-xl font-bold">{stat.number}</span>
                <span className="text-teal-300/70 text-xs mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href="/courses"
              className="px-7 py-3 rounded-full bg-teal-400 text-[#080d0f] font-bold text-sm hover:bg-teal-300 transition-colors"
            >
              Explore Courses
            </Link>
            <p
              href="#"
              className="px-7 py-3 rounded-full border border-teal-400/60 text-teal-300 font-medium text-sm hover:bg-teal-400/10 transition-colors"
            >
              Get Started Free
            </p>
          </div>
        </div>
        {/* Image container */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src={bannerImg}
              alt="SkillSphere Learning"
              width={700}
              height={500}
              className="relative shadow-xl z-10 w-full h-full object-cover rounded-2xl border border-teal-400/20"
              priority
            />

            {/*floating badge on image*/}
            <div className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0d2a2f] border border-teal-400/30 shadow-lg">
              <span className="text-2xl text-teal-500"><IoRocket /></span>
              <div>
                <p className="text-yellow-400 text-xs font-bold">Start Learning</p>
                <p className="text-teal-300/70 text-xs">Join 50,000+ students</p>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/*Bottom border line */}
      <div className="absolute bottom-0 left-0 mb-10 w-full h-px bg-teal-400/10" />
    </section>
  );
}
