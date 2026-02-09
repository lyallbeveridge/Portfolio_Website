import React, { useEffect, useState } from "react";
import "../styles/project.css";
import LinkWithIcon from "./LinkWithIcon";

// Explicitly tell webpack about the resources.
const coverImages = require.context(
  "../content/images/covers",
  false,
  /\.(png|jpe?g|svg)$/
);

function Project({ data }) {
  const [coverImage, setCoverImage] = useState("");

  useEffect(() => {
    try {
      const image = coverImages(`./${data.id}-cover.png`);
      setCoverImage(image);
    } catch (err) {
      console.error("Cover load failed:", data.id, err);
      setCoverImage("");
    }
  }, [data.id]);

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
    <>
      <>
        <div className="project-container" id={`${data.id}-project-container`}>
          <div className="project-siderail section-content-siderail">
            <div className="siderail-vline-bold" />
          </div>
          <div className="project-main-content-container">
            <div className="project-header-container">
              <img
                className="project-cover-image"
                src={coverImage}
                alt={data.title}
              />
              <div className="project-title-subtitle-container">
                <div className="project-title-container">
                  <h2>{data.title}</h2>
                </div>
                <div className="project-subtitle">{data.subtitle}</div>
              </div>
            </div>
            <div className="project-description subdued-font">
              {data.description.map((line, index) => (
                <p key={index} className="project-description-line">
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

            {data.skills.length > 0 && (
              <div className="skills-tags">
                {data.skills.map((skill) => (
                  <div className="skill-tag" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="siderail-vline-dotted section-content-siderail" />
      </>
    </>
  );
}

export default Project;
