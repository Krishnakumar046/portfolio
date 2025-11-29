import { Code2, Layers, Smartphone, Star } from "lucide-react";
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    {
      name: "React.js",
      category: "Frontend",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      proficiency: 95,
      description: "Building interactive UIs with component-based architecture",
      experience: "3+ years",
      useCase: "Single Page Applications, Component Libraries",
    },
    {
      name: "Next.js",
      category: "Framework",
      icon: Layers,
      color: "from-slate-700 to-slate-900",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      proficiency: 90,
      description: "Full-stack React framework with SSR and static generation",
      experience: "2+ years",
      useCase: "Production Web Apps, E-commerce Platforms",
    },
    {
      name: "JavaScript",
      category: "Language",
      icon: Code2,
      color: "from-yellow-400 to-amber-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      proficiency: 98,
      description: "Core programming language for web development",
      experience: "5+ years",
      useCase: "Frontend & Backend Development, Automation",
    },
    {
      name: "TypeScript",
      category: "Language",
      icon: Code2,
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      proficiency: 92,
      description: "Typed JavaScript for scalable and maintainable code",
      experience: "3+ years",
      useCase: "Large Codebases, Team Projects",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      icon: Layers,
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      proficiency: 94,
      description: "Utility-first CSS framework for rapid UI development",
      experience: "3+ years",
      useCase: "Responsive Design, Modern Interfaces",
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: Code2,
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      proficiency: 88,
      description: "Server-side JavaScript runtime for backend services",
      experience: "2+ years",
      useCase: "REST APIs, Real-time Applications",
    },
    {
      name: "Flutter",
      category: "Mobile",
      icon: Smartphone,
      color: "from-sky-400 to-blue-600",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      proficiency: 85,
      description: "Cross-platform mobile app development framework",
      experience: "2+ years",
      useCase: "iOS & Android Apps, Cross-platform Solutions",
    },
  ];
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use
            to create amazing digital experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.name;

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative w-48 h-56 hover:w-72 hover:h-[420px] transition-all duration-500 cursor-pointer"
              >
                {/* Outer Gradient Border */}
                <div
                  className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br ${skill.color} opacity-60 group-hover:opacity-100 transition-all duration-500`}
                />

                {/* Card Container */}
                <div className="relative w-full h-full rounded-3xl bg-white/20 backdrop-blur-xl shadow-lg overflow-hidden transition-all duration-500">
                  {/* Glow on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                  />

                  {/* CONTENT */}
                  <div className="w-full h-full p-5 flex flex-col transition-all duration-500">
                    {!isHovered ? (
                      /* 🌟 SMALL CARD (DEFAULT) */
                      <div className="flex flex-col items-center justify-center text-center gap-4">
                        {/* Icon */}
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-125`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800">
                          {skill.name}
                        </h3>

                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${skill.color} text-white`}
                        >
                          {skill.category}
                        </span>
                      </div>
                    ) : (
                      /* 🌟 FULL INFO ON HOVER */
                      <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-xl`}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </div>

                          <Star
                            className={`w-7 h-7 ${
                              skill.proficiency > 90
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mt-4">
                          {skill.name}
                        </h3>

                        <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                          {skill.description}
                        </p>

                        <div className="mt-4">
                          <p className="text-sm font-bold text-gray-800">
                            Experience
                          </p>
                          <p className="text-sm text-gray-700">
                            {skill.experience}
                          </p>
                        </div>

                        <div className="mt-4">
                          <p className="text-sm font-bold text-gray-800">
                            Use Cases
                          </p>
                          <p className="text-sm text-gray-700">
                            {skill.useCase}
                          </p>
                        </div>

                        {/* Bottom Proficiency Bar */}
                        <div className="mt-auto pt-4 border-t border-gray-300">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-700 font-semibold">
                              Proficiency
                            </span>
                            <span className="text-xs font-bold text-gray-900">
                              {skill.proficiency}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-700`}
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
