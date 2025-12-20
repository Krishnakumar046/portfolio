import { Code2, Palette, Rocket, Heart, Coffee, Music } from "lucide-react";
import { LazyMotion, domAnimation, m } from "motion/react";

const About = () => {
  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "1+", label: "Years Experience" },
    { number: "∞", label: "Cups of Coffee" },
  ];

  const interests = [
    { icon: Code2, label: "Clean Code", color: "text-blue-500" },
    { icon: Palette, label: "UI/UX Design", color: "text-pink-500" },
    { icon: Rocket, label: "Innovation", color: "text-purple-500" },
    { icon: Heart, label: "User Experience", color: "text-red-500" },
    { icon: Coffee, label: "Coffee Brewing", color: "text-amber-500" },
    { icon: Music, label: "Music Production", color: "text-green-500" },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <LazyMotion features={domAnimation}>
                  <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <p className="text-lg">
                      I’m a Front-End Developer focused on building scalable,
                      high-performance web applications using modern JavaScript
                      technologies. My core expertise lies in React.js, Next.js,
                      TypeScript, and Tailwind CSS, where I create responsive,
                      accessible, and user-centric interfaces.
                    </p>

                    <p>
                      I have hands-on experience developing and maintaining
                      end-to-end web applications, working across
                      component-based architectures, API integrations, and
                      modern state management solutions. I actively contribute
                      to improving UI/UX, optimizing performance, and ensuring
                      clean, reusable code across projects.
                    </p>

                    <p>
                      My technical skill set includes working with Redux,
                      Zustand, and Context API for state management, integrating
                      third-party libraries, implementing dynamic data flows,
                      and enabling features such as offline support, social
                      sharing, and interactive visualizations.
                    </p>

                    <p>
                      I hold a Bachelor’s degree in Electronics and
                      Communication Engineering from Anna University. My
                      academic foundation, combined with practical development
                      experience, allows me to approach problem-solving with
                      both technical depth and real-world understanding.
                    </p>
                  </m.div>
                </LazyMotion>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    What I Love
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => {
                    const Icon = interest.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <Icon className={`w-8 h-8 ${interest.color} mb-2`} />
                        <p className="text-sm font-medium text-gray-700">
                          {interest.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
