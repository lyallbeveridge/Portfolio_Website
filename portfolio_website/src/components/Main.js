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
      BE (Mechatronics) & BSc (Computer Science) - UNSW, '24 

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
