import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Briefcase,
  Github,
  Eye,
  X,
  ArrowRight,
  Code,
} from "lucide-react";

const ExperienceAndProjects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description:
        "Led frontend development for multiple high-traffic web applications serving over 1M users daily.",
      achievements: [
        "Improved application performance by 40% through code optimization and lazy loading",
        "Built reusable component library used across 5+ products",
        "Mentored 3 junior developers and conducted technical interviews",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "GraphQL",
      ],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      shortDescription:
        "Modern shopping platform with real-time inventory and seamless checkout",
      description:
        "A modern e-commerce platform built with React, TypeScript, and Stripe integration. Features include real-time inventory, advanced filtering, and seamless checkout experience.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "Node.js",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      shortDescription:
        "Real-time data visualization with interactive charts and insights",
      description:
        "A comprehensive analytics dashboard featuring real-time data visualization, interactive charts, custom reports, and advanced filtering capabilities for business intelligence.",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "TypeScript", "WebSocket", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      shortDescription:
        "Interactive weather forecasts with location-based recommendations",
      description:
        "A beautiful weather dashboard with interactive maps, detailed forecasts, and location-based recommendations. Includes hourly and weekly predictions with stunning visualizations.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "SCSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media Manager",
      shortDescription:
        "Unified platform for managing multiple social accounts",
      description:
        "A comprehensive social media management platform that allows scheduling posts, analyzing engagement, monitoring mentions, and managing multiple accounts from a single interface.",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "REST API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const selectedProjectData = projects.find((p) => p.id === selectedProject);

  return (
    <>
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="h-[calc(100vh-6rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
                  Work Experience
                </h2>
                <p className="text-lg text-gray-600">
                  My professional journey in frontend development
                </p>
              </div>

              <div className="relative pb-8">
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500"></div>

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                      <div className="hidden md:flex absolute left-6 w-5 h-5 bg-teal-500 rounded-full border-4 border-white shadow-lg items-center justify-center">
                        <Briefcase className="w-3 h-3 text-white" />
                      </div>

                      <div className="md:ml-20">
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">
                              {exp.title}
                            </h3>
                            <p className="text-teal-600 font-semibold text-lg flex items-center">
                              {exp.company}
                              <ExternalLink className="w-4 h-4 ml-2 opacity-60" />
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex items-center text-gray-600 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center text-gray-600 text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                              {exp.type}
                            </div>
                          </div>

                          <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                            {exp.description}
                          </p>

                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">
                              Key Achievements
                            </h4>
                            <ul className="space-y-1.5">
                              {exp.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-gray-600 text-sm"
                                >
                                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[calc(100vh-6rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
                  Web <span className="text-teal-600">Projects</span>
                </h2>
                <p className="text-lg text-gray-600">
                  A showcase of my web applications
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pb-8">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project.id)}
                    className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-teal-400 transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-xl"
                  >
                    <div className="p-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Code className="w-7 h-7 text-teal-600" />
                      </div>

                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <div className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-pulse"></div>
                        </div>
                      )}

                      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>

                      <div className="flex items-center text-teal-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech, index) => (
                              <span
                                key={index}
                                className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded-md">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && selectedProjectData && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProjectData.image}
                alt={selectedProjectData.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
              {selectedProjectData.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Featured Project
                </div>
              )}
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                {selectedProjectData.title}
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {selectedProjectData.description}
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-teal-50 text-teal-700 text-sm rounded-lg border border-teal-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProjectData.liveUrl}
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Live Demo</span>
                </a>
                <a
                  href={selectedProjectData.githubUrl}
                  className="flex-1 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceAndProjects;
