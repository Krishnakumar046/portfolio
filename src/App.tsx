import "./App.css";
import { motion, useScroll } from "motion/react";
import Header from "./Component/Header";
import Summary from "./Component/Summary";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Experience from "./Component/Experience";
import ExperienceAndProjects from "./Component/ExperienceAndProject";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Header />
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: "75px",
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          background: "linear-gradient(to right, #14b8a6, #3b82f6)",
          zIndex: 1000,
        }}
      />
      <Summary />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <ExperienceAndProjects /> */}
    </>
  );
}

export default App;
