import React from "react";
import "../styles/main.css";
import OpeningSection from "./OpeningSection";
import Divider from "./Divider";
import ProjectTimeline from "./ProjectTimeline";
import ExperienceTimeline from "./ExperienceTimeline";
import Footer from "./Footer";
import TitleSection from "./TitleSection";
import SectionHeader from "./SectionHeader";
import SectionContent from "./SectionContent";

function Main() {
  function toggleLightMode() {
    document.body.classList.toggle('light-mode');
    document.querySelectorAll('button').forEach((element) => {
      element.classList.toggle('light-mode');
    });
    document.querySelectorAll('.timeline-vline').forEach((element) => {
      element.classList.toggle('light-mode');
    });
    document.getElementById('main-container').classList.toggle('light-mode');
    document.querySelectorAll('.icon-svg').forEach((element) => {
      element.classList.toggle('light-mode');
    });

  }

  return (
    <div id="main-container">
      {/* <br /> */}
      {/* <button onClick={toggleLightMode}>Toggle theme</button> */}
      {/* <div id="cover-page"> */}
      <SectionHeader containerDivId="title-section-header">
        <TitleSection />
      </SectionHeader>
      <SectionContent containerDivId="opening-section">
        <OpeningSection />
      </SectionContent>
      {/* </div> */}


      <SectionHeader containerDivId="experience">
          <h1>Experience</h1>
      </SectionHeader>
      <SectionContent containerDivId="experience-section">
        <ExperienceTimeline />
      </SectionContent>

      <SectionHeader containerDivId="projects">
          <h1>Projects</h1>
      </SectionHeader>
      <SectionContent containerDivId="project-section">
        <ProjectTimeline />
      </SectionContent>

      <SectionHeader containerDivId="skills">
          <h1>Skills</h1>
      </SectionHeader>
      <SectionContent containerDivId="skills-section">
        <div id="skills-list">
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </SectionContent>

      <Divider />
      <Footer />
    </div>
  );
}

export default Main;
