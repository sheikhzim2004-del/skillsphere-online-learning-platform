import Image from "next/image";

const instructors = [
  {
    name: "Jhanker Bhaiye",
    subject: "Web Development",
    students: "50,400",
    courses: 3,
    image: "https://res.cloudinary.com/dohwbopqu/image/upload/q_auto/f_auto/v1778763017/Gemini_Generated_Image_1hs0hg1hs0hg1hs0_ytkxoo.png",
  },
  {
    name: "Sarah Ahmed",
    subject: "UI/UX Design",
    students: "9,800",
    courses: 5,
    image: "https://res.cloudinary.com/dohwbopqu/image/upload/q_auto/f_auto/v1778763319/Gemini_Generated_Image_1hs0hg1hs0hg1hs0_copy_m6tbeu.jpg",
  },
  {
    name: "Mark Wilson",
    subject: "Digital Marketing",
    students: "7,200",
    courses: 6,
    image: "https://res.cloudinary.com/dohwbopqu/image/upload/q_auto/f_auto/v1778763432/f_rcexwy.jpg",
  },
];

export default function TopInstructors() {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <span className="bg-teal-900 text-teal-300 text-sm font-medium px-4 py-1 rounded-full">
            Meet the Experts
          </span>
          <h2 className="text-3xl font-bold text-white mt-3 mb-2">
            Top Instructors
          </h2>
          <p className="text-teal-500 text-base">
            Learn from the best in the industry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 border border-teal-900 hover:border-teal-600 hover:shadow-lg hover:shadow-teal-900/30 transition-all duration-200 text-center"
            >
              <div className="w-16 h-16 bg-teal-800 rounded-full flex items-center justify-center text-teal-200 font-bold text-xl mx-auto mb-4">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>

              <h3 className="text-white font-semibold text-lg mb-1">
                {instructor.name}
              </h3>
              <p className="text-teal-400 text-sm mb-4">
                {instructor.subject}
              </p>

              <div className="flex justify-center gap-6 text-center">
                <div>
                  <p className="text-white font-semibold text-base">
                    {instructor.students}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">Students</p>
                </div>
                <div className="border-l border-teal-900"></div>
                <div>
                  <p className="text-white font-semibold text-base">
                    {instructor.courses}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">Courses</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}