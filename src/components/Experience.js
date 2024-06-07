import React, { useEffect, useState } from "react";
import "../styles/experience.css";
import { formatDate } from "../utils/helpers";
import logoImage from "../content/images/vidi-astra-logo.jpg";

function Experience({ data }) {
  console.log(data);
  return (
    <>
      <div
        className="experience-container"
        id={`${data.id}-experience-container`}
      >
        <div className="experience-siderail section-content-siderail">
          <div className="experience-siderail-date">
            {formatDate(data.endDate)}
          </div>
          <div className="siderail-vline-bold"/>
          <div className="experience-siderail-date">
            {formatDate(data.startDate)}
          </div>
        </div>
        <div className="experience-main-content-container">
          <div className="experience-header-container">
            <img className="experience-logo-image" src={logoImage} />
            <div className="experience-title-subtitle-container">
              <div className="experience-title-container">
                <h2>{data.position}</h2>
              </div>
              <div className="experience-subtitle">{data.company}</div>
            </div>
          </div>
          <div className="experience-description">{data.description}</div>
          <div className="skills-tags">
            {data.skills.map((skill) => (
              <div className="skill-tag" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="siderail-vline-dotted" />
    </>
  );
}

export default Experience;
