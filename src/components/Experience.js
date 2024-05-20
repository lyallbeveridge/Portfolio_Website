import React, { useEffect, useState } from "react";
import "../styles/project.css";
import { formatDate } from "../utils/helpers";
import ReactMarkdown from "react-markdown";

function Experience({ data }) {

  // Convert the main content from markdown
  const [mainContent, setMainContent] = useState("");
  useEffect(() => {

    // Main content
    fetch(`/content/${data.id}.md`)
      .then((response) => response.text())
      .then((data) => {
        setMainContent(data);
      });
  }, []);

  return (
    <div className="project-container" id={`${data.id}-container`}>
      <div className="project-container-siderails" />
      <div className="project-header-container">
        <div className="project-container-siderails">
          {formatDate(data.date)}
        </div>
        <div className="project-title-subtitle-container">
          <div className="project-title-container">
            <div>
              <h3>{data.title}</h3>
            </div>
          </div>
          <p className="project-subtitle">{data.description}</p>
        </div>
      </div>
      <div className="project-container-center">
        <div className="timeline-vline project-container-siderails"></div>
        <div className="project-content-container">
          <div
            className={"project-main-content"}
          >
            <ReactMarkdown>{mainContent}</ReactMarkdown>
          </div>
        </div>
        <div className="project-container-siderails"></div>
      </div>
    </div>
  );
}

export default Experience;
