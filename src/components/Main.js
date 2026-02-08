import React from "react";
import "../styles/main.css";
import AboutSection from "./AboutSection";
import Divider from "./Divider";
import ProjectTimeline from "./ProjectTimeline";
import ExperienceTimeline from "./ExperienceTimeline";
import Footer from "./Footer";
import TitleSection from "./TitleSection";
import SectionHeader from "./SectionHeader";
import SectionContent from "./SectionContent";

function Main() {
  function toggleLightMode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll("button").forEach((element) => {
      element.classList.toggle("light-mode");
    });
    document.querySelectorAll(".siderail-vline-dotted").forEach((element) => {
      element.classList.toggle("light-mode");
    });
    document.getElementById("main-container").classList.toggle("light-mode");
    document.querySelectorAll(".icon-svg").forEach((element) => {
      element.classList.toggle("light-mode");
    });
  }

  return (
    <div id="main-container">
      {/* <br /> */}
      {/* <button onClick={toggleLightMode}>Toggle theme</button> */}

      {/*Title section */}
      <TitleSection />

      {/* About section */}
      <SectionHeader containerDivId="about">
        <h1>About</h1>
      </SectionHeader>
      <SectionContent containerDivId="about-section">
        <AboutSection />
      </SectionContent>

      {/* Projects section */}
      <SectionHeader containerDivId="projects">
        <h1>Projects</h1>
      </SectionHeader>
      <SectionContent containerDivId="project-section">
        <ProjectTimeline />
      </SectionContent>

      {/* Experience section */}
      <SectionHeader containerDivId="experience">
        <h1>Experience</h1>
      </SectionHeader>
      <SectionContent containerDivId="experience-section">
        <ExperienceTimeline />
      </SectionContent>


      <Divider />
      <Footer />
    </div>
  );
}

export default Main;
