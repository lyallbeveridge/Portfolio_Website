import React from "react";
import projects from "../data/projects.json";
import Project from "./Project";
import "../styles/projectTimeline.css";

const ProjectTimeline = () => {
  return (
    <div id="all-projects-container">
      {projects.map((projectJSON) => (
        <Project data={projectJSON} key={projectJSON.id} />
      ))}
    </div>
  );
};

export default ProjectTimeline;
