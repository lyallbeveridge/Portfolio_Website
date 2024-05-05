import React, { useEffect, useState } from "react";
import Project from "./Project";
import "../styles/projectTimeline.css";

const ProjectTimeline = () => {
  const [projectsData, setProjectsData] = useState([]);

  // Fetch the project data
  useEffect(() => {
    fetch("/Portfolio_Website/content/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjectsData(data);
      });
  }, []);

  return (
    <>
      {projectsData.map((projectJSON) => (
        <Project data={projectJSON} key={projectJSON.id} />
      ))}
      <div className="project-timeline-footer">
        <div
          className="project-container-siderails"
          style={{ fontSize: "28px" }}
        >
          *
        </div>
      </div>
    </>
  );
};

export default ProjectTimeline;
