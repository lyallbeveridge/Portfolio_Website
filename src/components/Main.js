import React from "react";
import "../styles/main.css";
import Header from "./Header";
import Divider from "./Divider";
import ProjectTimeline from "./ProjectTimeline";
import TitleASCII from "./TitleASCII";

function Main() {
  return (
    <div className="main-container">
      <br/>
      <button>Toggle theme</button>
      <Divider />
      {/* <h1>Lyall Beveridge</h1> */}
      <TitleASCII />
      BE (Mechatronics) & BSc (Computer Science)
      <br/>
      UNSW, '24
      <div style={{display: 'flex', gap: '10px'}}>
        <a
          href="https://www.linkedin.com/in/lyall-beveridge"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/lyallbeveridge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a href="mailto:lyall.beveridge@gmail.com">Email</a>
      </div>
      <Divider />
      <Header />
      <Divider />
      <h1>Projects</h1>
      <Divider />
      <ProjectTimeline />
    </div>
  );
}

export default Main;
