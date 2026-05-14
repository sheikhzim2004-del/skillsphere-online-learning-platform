import { Brain, Calendar, CheckCircle, Clock, Moon, Repeat } from "lucide-react";


const tips = [
  {
    icon: <Brain />,
    title: "Active Recall",
    description:
      "After reading a topic, close the book and try to recall everything you just learned. It builds stronger memory.",
  },
  {
    icon: <Repeat />,
    title: "Spaced Repetition",
    description:
      "Review your notes after 1 day, then 3 days, then a week. This method helps you remember for a long time.",
  },
  {
    icon: <Clock />,
    title: "Pomodoro Technique",
    description:
      "Study for 25 minutes, then take a 5 minute break. Repeat 4 times, then take a longer break. Keeps your focus sharp.",
  },
  {
    icon: <Calendar />,
    title: "Daily Schedule",
    description:
      "Set a fixed time every day for studying. Consistency is more important than studying for long hours once in a while.",
  },
  {
    icon: <CheckCircle />,
    title: "Set Small Goals",
    description:
      "Break big topics into smaller chunks. Completing small goals gives you motivation to keep going.",
  },
  {
    icon: <Moon />,
    title: "Sleep Well",
    description:
      "Your brain stores memories during sleep. Getting 7-8 hours of sleep after studying improves retention greatly.",
  },
];

export default function LearningTips() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="bg-teal-900 text-teal-300 text-sm font-medium px-4 py-1 rounded-full">
            Tips & Tricks
          </span>
          <h2 className="text-3xl font-bold text-white mt-3 mb-2">
            Learning Tips for Students
          </h2>
          <p className="text-teal-500 text-base">
            Simple tips to help you learn faster and smarter
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-5 border border-teal-900 hover:border-teal-600 hover:shadow-lg hover:shadow-teal-900/30 transition-all duration-200"
            >
              <div className="w-11 h-11 bg-teal-900 rounded-xl flex items-center justify-center text-2xl mb-3">
                {tip.icon}
              </div>
              <h3 className="text-teal-300 font-semibold text-base mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}