import { Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react";
import Lottie from "lottie-react";
import { OfficeJson } from "./Lottiefiles/OfficeJson";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer - (React.js & Next.js)",
      company: "Populus Enpowerment network",
      location: "Teynampet,Chennai",
      period: " June 2025 - Present",
      type: "Full-time",
      description:
        "Frontend developer responsible for building and maintaining web applications using React.js and Next.js frameworks.",
      achievements: [
        `Developed and maintained responsive web applications using Next.js, React.js, JavaScript, and
TypeScript.`,
        `Collaborated with the team to build and optimize 4 end-to-end projects, focusing on user-friendly
UI/UX and performance improvements.`,
        "Improved application performance by 40% through code optimization and lazy loading",
        "Built reusable component library used across 5+ products",
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
    {
      title: "Frontend Developer - (internship)",
      company: "Populus Enpowerment network",
      location: "Teynampet,Chennai",
      period: "January 2025 - June 2025",
      type: "Internship",
      description:
        "Gets hands-on experience and exploring React.js and Next.js frameworks for better understanding.",
      achievements: [
        `Joined as a fresher and successfully completed internship training, transitioning into a Front-End
Developer role.`,
        `Gained hands-on experience in component-based development, state management, and API
integration.`,
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

  return (
    <section id="experience" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Work {""}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg font-medium text-gray-600 max-w-2xl mx-auto">
            My professional journey in frontend development and the impact I've
            made
          </p>
        </div>
        <div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-5 h-5 bg-teal-500 rounded-full border-4 border-white shadow-lg items-center justify-center">
                    <Briefcase className="w-3 h-3 text-white" />
                  </div>

                  <div className="md:ml-20">
                    <div className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="mb-4 lg:mb-0">
                          <h3 className="text-xl font-bold text-slate-800 mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-teal-600 font-semibold text-lg flex items-center">
                            {exp.company}
                            <ExternalLink className="w-4 h-4 ml-2 opacity-60" />
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                            {exp.type}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-600 text-sm"
                            >
                              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        {index % 2 == 1 && (
                          <div className="absolute -top-62 md:-bottom-60 -right-7 md:right-15 w-96 h-64 opacity-10 md:opacity-20 pointer-events-none">
                            <Lottie animationData={OfficeJson} loop={true} />
                          </div>
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
  );
};

export default Experience;
