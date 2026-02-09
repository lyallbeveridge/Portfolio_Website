import React, { useEffect, useState } from "react";
import "../styles/experience.css";
import { formatDate } from "../utils/helpers";
import LinkWithIcon from "./LinkWithIcon";

// Explicitly tell webpack about the resources.
const logoImages = require.context(
  "../content/images/logos",
  false,
  /\.(png|jpe?g|svg)$/
);

function Experience({ data }) {
  const [logoImage, setLogoImage] = useState("");

  // Get the image
  useEffect(() => {
    try {
      const image = logoImages(`./${data.logoImage}`);
      setLogoImage(image);
    } catch (err) {
      console.error("Logo load failed:", data.logoImage, err);
      setLogoImage("");
    }
  }, [data.logoImage]);

  return (
    <>
      <div
        className="experience-container"
        id={`${data.id}-experience-container`}
      >
        <div className="experience-siderail section-content-siderail">
          <div className="experience-siderail-date">
            {data.endDate == "PRESENT" ? data.endDate : formatDate(data.endDate)}
          </div>
          <div className="siderail-vline-bold"/>
          <div className="experience-siderail-date">
            {formatDate(data.startDate)}
          </div>
        </div>
        <div className="experience-main-content-container">
          <div className="experience-header-container">
            <img className="experience-logo-image" src={logoImage} onClick={() => window.open(data.website, "_blank", "noopener")}/>
            <div className="experience-title-subtitle-container">
              <div className="experience-title-container">
                <h2>{data.position}</h2>
              </div>
              <div className="experience-subtitle">
                <a className="experience-subtitle-link" href={data.website} target="_blank" rel="noopener noreferrer">
                  {data.company}
                </a>
              </div>
            </div>
          </div>
          <div className="experience-description subdued-font">
            {data.description.map((line, index) => (
              <p key={index} className="experience-description-line">
                {line}
              </p>
            ))}
          </div>
          {data.links && data.links.length > 0 && (
            <div className="links-tags">
              {data.links.map((link) => (
                <LinkWithIcon
                  key={link.url}
                  href={link.url}
                  text={link.text}
                  type={link.type}
                />
              ))}
</div>
          )}
          <div className="skills-tags">
            {data.skills.map((skill) => (
              <div className="skill-tag" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="siderail-vline-dotted section-content-siderail" />
    </>
  );
}

export default Experience;
