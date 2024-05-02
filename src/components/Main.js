import React from "react";
import "../styles/main.css";
import Header from "./Header";
import Divider from "./Divider";
import ProjectTimeline from "./ProjectTimeline";

function Main() {
  return (
    <div className="main-container">
      <Divider />
      <h1>Lyall Beveridge</h1>
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
