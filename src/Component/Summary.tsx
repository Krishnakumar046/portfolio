import Lottie from "lottie-react";
import { DeveloperGif } from "./Lottiefiles/DeveloperGifJson";
import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react";
import { manJson } from "./Lottiefiles/ManJson";
import { SummaryManJson } from "./Lottiefiles/SummaryManjson";
import TextRunning from "./animated/TextRunningAnimation";
import { domAnimation, LazyMotion, m } from "motion/react";

const Summary = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/KRISHNAKUMARRESUME.pdf";
    link.download = "KrishnaKumar-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="summary"
      className="min-h-screen flex bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
    >
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-[100%] md:w-[50%] px-3 sm:px-6 lg:px-4 py-5">
          <div className="text-justify">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center mr-0.5">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center overflow-visible">
                    <Lottie
                      animationData={manJson}
                      loop={true}
                      className="scale-185 mr-2.5"
                    />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl text-center sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
                Krishna kumar
              </h1>
              <p className="text-xl text-center sm:text-2xl text-teal-600 font-medium mb-6">
                <TextRunning />
              </p>
            </div>

            <div className=" hidden 2xl:block max-w-3xl mx-auto mb-12">
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0, x: -60 }} // start from left
                  whileInView={{ opacity: 1, x: 0 }} // move to normal position
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    I am a Front-End Developer with a strong focus on modern web
                    technologies, including React.js, Next.js, JavaScript,
                    TypeScript, Tailwind CSS, HTML, and CSS. I specialize in
                    building responsive, scalable, and high-performance user
                    interfaces that deliver seamless user experiences.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    I enjoy transforming complex requirements into clean,
                    intuitive designs and writing maintainable, reusable code. I
                    actively collaborate with back-end teams to integrate APIs,
                    optimize data flow, and ensure smooth end-to-end
                    functionality across applications.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    With a strong foundation in front-end architecture and UI/UX
                    best practices, I aim to leverage my technical skills in a
                    challenging role where I can contribute to building robust
                    web applications while continuously learning and evolving
                    with modern technologies.
                  </p>
                </m.div>
              </LazyMotion>
            </div>
            <div className=" max-w-3xl mx-auto mb-12">
              <LazyMotion features={domAnimation}>
                <m.div
                  initial={{ opacity: 0, x: -60 }} // start from left
                  whileInView={{ opacity: 1, x: 0 }} // move to normal position
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <p className="text-lg text-gray-700 leading-relaxed mb-3">
                    I am a Front-End Developer specializing in modern web
                    technologies such as React.js, Next.js, JavaScript,
                    TypeScript, Tailwind CSS, HTML, and CSS. I focus on building
                    responsive, scalable, and high-performance user interfaces
                    that deliver seamless user experiences.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-3">
                    I enjoy converting complex requirements into clean,
                    intuitive designs and writing maintainable, reusable code. I
                    work closely with back-end teams to integrate APIs, optimize
                    data flow, and ensure smooth end-to-end functionality.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-3">
                    With a strong foundation in front-end architecture and UI/UX
                    best practices, I am eager to contribute to building robust
                    web applications while continuously learning and adapting to
                    evolving technologies.
                  </p>
                </m.div>
              </LazyMotion>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Krishnakumar046"
                  target="blank"
                  className="p-3 text-gray-600 hover:text-teal-600 hover:bg-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/krishnakumart046/"
                  target="blank"
                  className="p-3 text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative  md:w-[50%] px-3 sm:px-6 lg:px-4 py-10">
          <div className="absolute -top-30">
            <Lottie
              animationData={SummaryManJson}
              loop={true}
              style={{ height: "160%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
