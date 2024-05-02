import React from "react";
import "../styles/main.css";
import OpeningSection from "./OpeningSection";
import Divider from "./Divider";
import ProjectTimeline from "./ProjectTimeline";
import TitleASCII from "./TitleASCII";
import IconLinkTray from "./IconLinkTray";

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
      <IconLinkTray />
      <Divider />
      <OpeningSection />
      <Divider />
      <h1>Projects</h1>
      <Divider />
      <ProjectTimeline />
    </div>
  );
}

export default Main;
