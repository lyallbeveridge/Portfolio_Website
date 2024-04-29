import React from "react";
import projects from "../data/projects.json";
import Project from "./Project";

const ProjectTimeline = () => {
  return (
    <>
      {projects.map((projectJSON) => (
        <Project data={projectJSON} key={projectJSON.id} />
      ))}
    </>
  );
};

export default ProjectTimeline;
