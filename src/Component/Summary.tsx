import Lottie from "lottie-react";
import { DeveloperGif } from "./Lottiefiles/developergif";
import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react";
import { manJson } from "./Lottiefiles/manjson";

const Summary = () => {
  return (
    <section
      id="summary"
      className="min-h-screen flex bg-gradient-to-br from-slate-50 to-blue-50 pt-16"
    >
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-[100%] md:w-[50%] px-3 sm:px-6 lg:px-4 py-10">
          <div className="text-justify">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
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
                Frontend Developer
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "Front-End developer with a focus on Front-End technologies,
                including React js, Next js, JavaScript, TypeScript,tailwindcss
                HTML and CSS. Looking to leverage my broad technical skills in a
                challenging role that involves in front-end development and with
                some collaboration with back-end teams to create seamless and
                robust web applications". And I can be able to use my skills to
                develop to built seamless websites
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button className="inline-flex items-center px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 text-gray-600 hover:text-teal-600 hover:bg-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="p-3 text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="p-3 text-gray-600 hover:text-blue-400 hover:bg-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-[50%] px-3 sm:px-6 lg:px-4 py-10">
          <Lottie
            animationData={DeveloperGif}
            loop={true}
            style={{ height: "70%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Summary;
