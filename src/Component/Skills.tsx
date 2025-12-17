import Lottie from "lottie-react";
import { skillJson } from "./Lottiefiles/skilljson";

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "State Management",
    skills: ["Redux", "Redux Toolkit", "Zustand", "Context API"],
  },
  {
    title: "Backend & APIs",
    skills: ["REST APIs", "Axios", "Node.js (Basics)", "Express.js"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Vite", "Webpack", "Postman", "Figma"],
  },
  {
    title: "Data & Visualization",
    skills: ["AG Grid", "Charts.js", "Recharts", "Leaflet Maps"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-gray-50 to-slate-100 overflow-hidden"
    >
      {/* LOTTIE BACKGROUND */}
      <div className="absolute top-20 md:top-0 -left-10 w-72 sm:w-96 opacity-10 pointer-events-none">
        <Lottie animationData={skillJson} loop autoplay />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to build scalable, performant, and
            user-focused applications.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((group, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium rounded-full
                      bg-indigo-50 text-indigo-700 border border-indigo-200
                      hover:bg-indigo-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
