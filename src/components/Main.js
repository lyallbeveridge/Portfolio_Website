import React from "react";
import "../styles/main.css";
import OpeningSection from "./OpeningSection";
import Divider from "./Divider";
import ProjectTimeline from "./ProjectTimeline";
import TitleASCII from "./TitleASCII";
import IconLinkTray from "./IconLinkTray";
import Footer from "./Footer";

function Main() {
  return (
    <div className="main-container">
      <br />
      <button>Toggle theme</button>
      <Divider />
      {/* <h1>Lyall Beveridge</h1> */}
      <TitleASCII />
      BE (Mechatronics) & BSc (Computer Science)
      <br />
      UNSW, '24
      <div id="contents-links">
        <div>
          {"> "}{" "}
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              document
                .querySelector("#skills")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </a>
        </div>
        <div>
          {"> "}{" "}
          <a
            href="#projects"
            onClick={(event) => {
              event.preventDefault();
              document
                .querySelector("#projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </a>
        </div>
      </div>
      <IconLinkTray />
      <Divider />
      <OpeningSection />
      <Divider />
      <div id="skills">
        <h1>Skills</h1>
      </div>
      <Divider />
      <Divider />
      <div id="projects">
        <h1>Projects</h1>
      </div>
      <Divider />
      <ProjectTimeline />
      <Divider />
      <Footer />
    </div>
  );
}

export default Main;
