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
  return (
    <div className="main-container">
      <br />
      <button>Toggle theme</button>
      <SectionHeader>
        <TitleSection />
      </SectionHeader>
      <SectionContent containerDivId="opening-section">
        <OpeningSection />
      </SectionContent>

      <SectionHeader>
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

      <SectionHeader>
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
