import React, { useState } from "react";
import { Code, Smartphone, Database, Wrench, Zap, Palette } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code,
      color: "violet",
      skills: [
        {
          name: "React & Next.js",
          level: 95,
          description: "Building scalable web applications",
        },
        {
          name: "TypeScript",
          level: 90,
          description: "Type-safe JavaScript development",
        },
        {
          name: "Tailwind CSS",
          level: 92,
          description: "Utility-first CSS framework",
        },
        {
          name: "JavaScript ES6+",
          level: 94,
          description: "Modern JavaScript features",
        },
      ],
    },

    backend: {
      title: "Backend & Database",
      icon: Database,
      color: "blue",
      skills: [
        { name: "Node.js", level: 85, description: "Server-side JavaScript" },
        { name: "MongoDB", level: 83, description: "NoSQL database solutions" },
        { name: "GraphQL", level: 78, description: "Query language for APIs" },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "emerald",
      skills: [
        {
          name: "Git & GitHub",
          level: 95,
          description: "Version control & collaboration",
        },
        { name: "Docker", level: 82, description: "Containerization platform" },
        { name: "AWS", level: 78, description: "Cloud computing services" },
        {
          name: "Webpack/Vite",
          level: 88,
          description: "Build tools & bundlers",
        },
      ],
    },
    design: {
      title: "Design & UX",
      icon: Palette,
      color: "pink",
      skills: [
        { name: "Figma", level: 92, description: "UI/UX design & prototyping" },
        {
          name: "User Research",
          level: 80,
          description: "Understanding user needs",
        },
        {
          name: "Prototyping",
          level: 88,
          description: "Interactive design mockups",
        },
      ],
    },
    performance: {
      title: "Performance & Testing",
      icon: Zap,
      color: "amber",
      skills: [
        {
          name: "Web Performance",
          level: 90,
          description: "Optimization techniques",
        },
        {
          name: "Jest & Testing Library",
          level: 87,
          description: "Unit & integration testing",
        },
        { name: "Lighthouse", level: 85, description: "Performance auditing" },
        {
          name: "SEO Optimization",
          level: 83,
          description: "Search engine optimization",
        },
      ],
    },
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      violet: {
        bg: "bg-violet-500",
        text: "text-violet-600",
        border: "border-violet-200",
        hover: "hover:bg-violet-50",
      },
      indigo: {
        bg: "bg-indigo-500",
        text: "text-indigo-600",
        border: "border-indigo-200",
        hover: "hover:bg-indigo-50",
      },
      blue: {
        bg: "bg-blue-500",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:bg-blue-50",
      },
      emerald: {
        bg: "bg-emerald-500",
        text: "text-emerald-600",
        border: "border-emerald-200",
        hover: "hover:bg-emerald-50",
      },
      pink: {
        bg: "bg-pink-500",
        text: "text-pink-600",
        border: "border-pink-200",
        hover: "hover:bg-pink-50",
      },
      amber: {
        bg: "bg-amber-500",
        text: "text-amber-600",
        border: "border-amber-200",
        hover: "hover:bg-amber-50",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.violet;
  };

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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            const colors = getColorClasses(category.color);
            const isActive = activeCategory === key;

            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? `${colors.bg} text-white shadow-lg`
                    : `bg-white ${colors.text} ${colors.hover} shadow-md hover:shadow-lg`
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">
                  {category.title.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              {React.createElement(
                skillCategories[activeCategory as keyof typeof skillCategories]
                  .icon,
                {
                  className: `w-8 h-8 ${
                    getColorClasses(
                      skillCategories[
                        activeCategory as keyof typeof skillCategories
                      ].color
                    ).text
                  }`,
                }
              )}
              <h3 className="text-2xl font-bold text-gray-900">
                {
                  skillCategories[
                    activeCategory as keyof typeof skillCategories
                  ].title
                }
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[
              activeCategory as keyof typeof skillCategories
            ].skills.map((skill, index) => {
              const colors = getColorClasses(
                skillCategories[activeCategory as keyof typeof skillCategories]
                  .color
              );

              return (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {skill.description}
                      </p>
                    </div>
                    <span className={`text-sm font-bold ${colors.text}`}>
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${colors.bg} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
