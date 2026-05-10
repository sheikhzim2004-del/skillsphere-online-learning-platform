import React from 'react';

const colorMap = {
  Development: {
    badge: "bg-teal-500/20 text-teal-300 border border-teal-500/30",
    glow: "shadow-teal-500/20",
    accent: "from-teal-500 to-cyan-400",
    bar: "bg-teal-400",
    ring: "ring-teal-500/30",
    btn: "from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400",
  },
  Design: {
    badge: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
    glow: "shadow-cyan-500/20",
    accent: "from-cyan-500 to-teal-400",
    bar: "bg-cyan-400",
    ring: "ring-cyan-500/30",
    btn: "from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400",
  },
  Marketing: {
    badge: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    glow: "shadow-emerald-500/20",
    accent: "from-emerald-500 to-teal-400",
    bar: "bg-emerald-400",
    ring: "ring-emerald-500/30",
    btn: "from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400",
  },
  Career: {
    badge: "bg-violet-500/20 text-violet-300 border border-violet-500/30",
    glow: "shadow-violet-500/20",
    accent: "from-violet-500 to-purple-400",
    bar: "bg-violet-400",
    ring: "ring-violet-500/30",
    btn: "from-violet-500 to-purple-500 hover:from-violet-400 hover:to-purple-400",
  },
};

const categoryIcons = {
  Development: "🌐",
  Design: "🎨",
  Marketing: "📣",
  Career: "💼",
};

const StarIcon = ({ filled }) => (
  <svg className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-slate-600"}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CourseCard = ({ course }) => {
  const c = colorMap[course.category] || colorMap.Development;
  const ratingPercent = ((course.rating - 4.0) / 1.0) * 100;

  return (
    <div className={`relative group bg-slate-900 rounded-2xl border border-slate-700/60 hover:border-teal-500/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl ${c.glow} hover:shadow-teal-500/30 ring-1 ${c.ring}`}>

      {/* Course Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category badge on image */}
        <div className="absolute bottom-3 left-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${c.badge}`}>
            {categoryIcons[course.category] || "📚"} {course.category}
          </span>
        </div>

        {/* Level tag */}
        <div className="absolute top-3 right-3">
          <span className="bg-slate-800/80 backdrop-blur text-slate-300 text-xs px-2 py-1 rounded-lg border border-slate-600/50">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <h3 className="text-white font-bold text-base leading-snug line-clamp-2 group-hover:text-teal-300 transition-colors duration-300">
          {course.title}
        </h3>

        {/* Instructor */}
        <div className="flex items-center gap-2">
          <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${c.accent} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
            {course.instructor.charAt(0)}
          </div>
          <p className="text-slate-400 text-sm truncate">{course.instructor}</p>
          <span className="ml-auto text-slate-500 text-xs">{course.duration}</span>
        </div>

        {/* Rating */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} filled={i <= Math.round(course.rating)} />
              ))}
              <span className="text-teal-400 font-bold text-sm ml-1">{course.rating}</span>
            </div>
          </div>
          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <div
              className={`h-full ${c.bar} rounded-full transition-all duration-700`}
              style={{ width: `${ratingPercent}%` }}
            />
          </div>
        </div>

        {/* Button */}
        <button className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${c.btn} text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg`}>
          View Details →
        </button>
      </div>
    </div>
  );
};

export default CourseCard;