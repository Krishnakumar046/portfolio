import Lottie from "lottie-react";
import SkillJson from "./Lottiefiles/SkillJson"; 

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "/images/icons8-react-100.png" },
      { name: "Next.js", icon: "/images/icons8-nextjs-96.png" },
      { name: "TypeScript", icon: "/images/icons8-typescript-96.png" },
      { name: "JavaScript", icon: "/images/icons8-javascript-96.png" },
      { name: "HTML5", icon: "/images/icons8-html-100.png" },
      { name: "CSS3", icon: "/images/icons8-css-96.png" },
      { name: "Tailwind CSS", icon: "/images/icons8-tailwindcss-100.png" },
      { name: "Bootstrap", icon: "/images/icons8-bootstrap-100.png" },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux", icon: "/images/icons8-redux-96.png" },
      { name: "Zustand", icon: "/images/icons8-bear-80.png" },
      { name: "Context API", icon: "/images/icons8-api-100.png" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Axios", icon: "/images/icons8-api-100.png" },
      { name: "Node.js", icon: "/images/icons8-nodejs-96.png" },
      { name: "Express.js", icon: "/images/icons8-express-js-100.png" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: "/images/icons8-git-96.png" },
      { name: "GitHub", icon: "/images/icons8-github-100.png" },
      { name: "VS Code", icon: "/images/icons8-visual-studio-96.png" },
      { name: "npm", icon: "/images/icons8-npm-96.png" },
    ],
  },
  {
    title: "Data & Visualization",
    skills: [
      { name: "AG Grid", icon: "/images/icons8-table-grid-100.png" },
      { name: "Charts.js", icon: "/images/icons8-chart-100.png" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-gray-50 to-slate-100 overflow-hidden"
    >
      {/* LOTTIE */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[100%] sm:w-96 md:w-[50%] opacity-[0.06]">
          <Lottie
            animationData={SkillJson}
            loop
            autoplay
            className="scale-120 lg:scale-100"
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg font-medium text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to build scalable, performant, and
            user-focused applications.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <div className="mb-5">
            <p className="text-sm tracking-widest text-gray-400 mb-2">
              ✳ MY STACK
            </p>
          </div>

          {/* STACK SECTIONS */}
          <div className="space-y-10 md:space-y-20">
            {skillsData.map((group, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 md:gap-30"
              >
                {/* LEFT TITLE */}
                <h3 className="text-3xl tracking-widest text-gray-500">
                  {group.title.toUpperCase()}
                </h3>

                {/* RIGHT ICON LIST */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-14 gap-y-10">
                  {group.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 group cursor-default"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="
                        w-8 h-8 object-contain
                        transition-transform duration-300
                        group-hover:-translate-y-1
                      "
                      />
                      <span className="text-md text-gray-400 group-hover:text-gray-500 transition">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
