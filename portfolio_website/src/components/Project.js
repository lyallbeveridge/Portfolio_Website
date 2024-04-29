import React, { useState } from "react";
import "../styles/project.css";
import { formatDate } from "../utils/helpers";

function Project({ data }) {
  // Dynamically import the cover image
  const coverImage = require(`../images/${data.coverImage}`);

  // Handle the expansion of the project main content
  const [expanded, setExpanded] = useState(false);
  const toggleContentExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="project-container">
      <div
        className="project-container-siderails"
        style={{ marginRight: "0.85vw" }}
      >
        {formatDate(data.date)}
        {/* 
          <br />
          ||
          <br />
          ||
          <br />
          || 
          */}
        <div className="pattern"></div>
      </div>
      <div className="project-container-center">
        <div className="project-header-container">
          <div className="project-title-container">
            <div>
              <h3>{data.title}</h3>
            </div>
            {/* <div className="expand-btn">
                expand (+)
            </div> */}
          </div>
          {data.description && (
            <p className="project-subtitle">{data.description}</p>
          )}
        </div>
        <div className="cover-image-container">
          <img className="cover-image" src={coverImage} alt={data.title} />
        </div>
        <br />
        <div className="project-main-content">
          {expanded
            ? data.longDescription && <p>{data.longDescription}</p>
            : null}
        </div>
      </div>
      <div
        className="project-container-siderails"
        style={{ marginLeft: "0.85vw" }}
      >
        <button onClick={toggleContentExpand}>{expanded ? '-' : '+'}</button>
      </div>
    </div>
  );
}

export default Project;
