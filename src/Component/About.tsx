import { Code2, Palette, Rocket, Heart, Coffee, Music } from "lucide-react";

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Happy Clients" },
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
              <p className="text-lg">
                I'm a creative frontend developer with a passion for building
                exceptional digital experiences. With over 3 years in the
                industry, I specialize in React, TypeScript, and modern web
                technologies.
              </p>
              <p>
                My journey started with a Computer Science degree from UC
                Berkeley, where I discovered my love for the intersection of
                technology and design. I believe that great software should not
                only function flawlessly but also delight users with intuitive
                and beautiful interfaces.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends,
                brewing the perfect cup of coffee, or producing electronic music
                in my home studio.
              </p>
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
