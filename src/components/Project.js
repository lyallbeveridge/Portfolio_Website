import React, { useEffect, useState } from "react";
import "../styles/project.css";
import { formatDate } from "../utils/helpers";
import ReactMarkdown from "react-markdown";

function Project({ data }) {
  // Dynamically import the cover image
  // const coverImage = require(`../images/${data.coverImage}`);
  // const coverImage = require(`C:\\Users\\lyall\\Documents\\Portfolio_Website\\src\\content\\images\\on-desk-in-stand.png`);
  // const mainContentMarkdown = requi  re(`/Portfolio_Website/content/${data.id}.md`);

  // Cover image

  // Convert the main project content from markdown
  const [coverImage, setCoverImage] = useState("");
  const [mainContent, setMainContent] = useState("");
  useEffect(() => {
    // Cover image (which is a static png file)
    fetch(`/content/images/${data.coverImage}`)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.src = url;
        img.onload = () => {
          URL.revokeObjectURL(url);
        };
        setCoverImage(url);
      });

    // Main content
    fetch(`/content/${data.id}.md`)
      .then((response) => response.text())
      .then((data) => {
        setMainContent(data);
      });
  }, []);

  // Handle the expansion of the project main content
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContentExpand = () => {
    if (!isExpanded) {
      setTimeout(() => {
        document
          .getElementById(`${data.id}-container`)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }, 10);
    }
    setIsExpanded(!isExpanded);
  };

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
        <div className="project-container-siderails">
          <button className="expand-project-btn" onClick={toggleContentExpand}>
            {isExpanded ? "-" : "+"}
          </button>
        </div>
      </div>
      <div className="project-container-center">
        <div className="siderail-vline-dotted project-container-siderails"></div>
        <div className="project-content-container">
          <img className="cover-image" src={coverImage} alt={data.title} />
          <div
            className={
              isExpanded
                ? "project-main-content expanded"
                : "project-main-content"
            }
          >
            <ReactMarkdown>{mainContent}</ReactMarkdown>
          </div>
        </div>
        <div className="project-container-siderails"></div>
      </div>
    </div>
  );
}

export default Project;
