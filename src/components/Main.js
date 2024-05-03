import React from "react";
import "../styles/main.css";
import OpeningSection from "./OpeningSection";
import Divider from "./Divider";
import ProjectTimeline from "./ProjectTimeline";
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

    document.getElementById('main-container').classList.toggle('light-mode');
    document.querySelectorAll('.icon-svg').forEach((element) => {
      element.classList.toggle('light-mode');
    });

  }

  return (
    <div id="main-container">
      <br />
      <button onClick={toggleLightMode}>Toggle theme</button>
      <SectionHeader containerDivId="title-section-header">
        <TitleSection />
      </SectionHeader>
      <SectionContent containerDivId="opening-section">
        <OpeningSection />
      </SectionContent>

      <SectionHeader containerDivId="skills-section-header">
        <div id="skills">
          <h1>Skills</h1>
        </div>
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

      <SectionHeader containerDivId="projects-section-header">
        <div id="projects">
          <h1>Projects</h1>
        </div>
      </SectionHeader>
      <SectionContent containerDivId="project-section">
        <ProjectTimeline />
      </SectionContent>

      <Divider />
      <Footer />
    </div>
  );
}

export default Main;
