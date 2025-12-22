import { useEffect, useRef, useState } from "react";
import ProjectCard from "./animated/ProjectCard";
import Lottie from "lottie-react";
import runningJson from "../assets/lottie/running.json";

const projects = [
  {
    sno: "01",
    title: "STAND FOR TAMILNADU",
    duration: "Feb 2025 – Mar 2025",
    tech: ["Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    points: [
      "Built a client-side social sharing feature for a public-facing Next.js platform.",
      "Implemented dynamic Open Graph thumbnails and meta descriptions for rich social previews.",
    ],
  },
  {
    sno: "02",
    title: "HAWKEYE",
    duration: "Mar 2025 – Jun 2025",
    tech: ["Next.js", "Redux", "TypeScript", "Tailwind CSS", "Leaflet"],
    points: [
      "Developed the application end-to-end with a focus on performance and scalability.",
      "Integrated interactive maps using Leaflet for dynamic geospatial visualization.",
      "Enabled offline access using Service Workers for previously visited routes.",
    ],
  },
  {
    sno: "03",
    title: "ELECTION GPT",
    duration: "Jul 2025 – Sep 2025",
    tech: ["React", "Zustand", "TypeScript", "Tailwind CSS"],
    points: [
      "Built an election-focused AI assistant for answering election-related queries.",
      "Rendered AI responses including text, charts, bar graphs, and pie charts.",
      "Migrated a legacy React application to Vite for improved performance.",
    ],
  },
  {
    sno: "04",
    title: "OTN TABLE",
    duration: "Sep 2025 – Present",
    tech: ["React", "TypeScript", "AG Grid", "Tailwind CSS"],
    points: [
      "Built a dynamic data table interface using AG Grid.",
      "Implemented approval workflows with real-time sync to a mobile application.",
      "Added CRUD functionality for managing table rows efficiently.",
    ],
  },
];

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Clear refs before rendering
  itemRefs.current = [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (index === -1) return;

          // Only add, do NOT remove
          setVisibleItems((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="py-15 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="hidden md:block text-center mb-5">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Selected projects showcasing real-world problem solving, performance
            optimization, and scalable architecture.
          </p>
        </div>
        <div className=" md:hidden relative text-start ml-3 md:ml-0 md:text-center mb-5">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg font-medium text-gray-600 max-w-3xl mx-auto">
            Selected projects showcasing real-world problem solving, performance
            optimization, and scalable architecture.
          </p>
          {/* <div className="absolute top-6 right-0 w-72 h-56 opacity-50 pointer-events-none select-none">
            <Lottie animationData={experiencesJson} loop={true} />
          </div> */}
        </div>
        {/* DESKTOP */}
        <div className=" hidden md:block w-50 h-36 opacity-70">
          <Lottie animationData={runningJson} loop={true} />
        </div>
        <div className="hidden md:block relative">
          {/* TOP HORIZONTAL LINE */}
          <div className="absolute -top-1 left-0 w-full h-[2px] bg-gray-300" />

          <div className="grid grid-cols-4 gap-10 pt-16">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="relative flex justify-center"
              >
                {/* VERTICAL HANGING LINE */}
                <div className="absolute -top-15 left-1/2 -translate-x-1/2 w-[2px] h-16 bg-gray-300" />

                {/* DOT (Optional – looks premium) */}
                <div className="absolute -top-18 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-500 border-2 border-gray-500" />

                {/* CARD */}
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden relative">
          <div className="absolute left-6.5 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-300"></div>

          <div className="space-y-8 pl-9">
            {projects.map((project, index) => {
              const isVisible = visibleItems.includes(index);

              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className={`transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-6"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="absolute -left-4.5 top-6 w-5 h-5 bg-blue-600 rounded-full ring-4 ring-white shadow"></div>

                  <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200">
                    <h3 className="text-lg font-semibold text-teal-600 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">
                      {project.duration}
                    </p>

                    <ul className="space-y-2 text-sm text-gray-700">
                      {project.points.map((point, i) => (
                        <li key={i} className="flex">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Projects;
