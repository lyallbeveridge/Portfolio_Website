import React from "react";
import projects from "../data/projects.json";
import Project from "./Project";
import "../styles/projectTimeline.css";

const ProjectTimeline = () => {
  return (
    <>
      {projects.map((projectJSON) => (
        <Project data={projectJSON} key={projectJSON.id} />
      ))}
      <div className="project-timeline-footer">
        <div className="project-container-siderails" style={{fontSize: "28px"}}>*</div>
      </div>
    </>
  );
};

export default ProjectTimeline;
