import React, { useEffect, useState } from "react";
import Project from "./Project";
import "../styles/projectTimeline.css";

const ProjectTimeline = () => {
  const [projectsData, setProjectsData] = useState([]);

  // Fetch the project data
  useEffect(() => {
    fetch("/content/projects.json")
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
      
      {/* Footer */}
      <div className="siderail-vline-terminator section-content-siderail">
        *
      </div>
    </>
  );
};

export default ProjectTimeline;
