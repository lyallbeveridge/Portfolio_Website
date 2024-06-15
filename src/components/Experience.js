import React, { useEffect, useState } from "react";
import "../styles/experience.css";
import { formatDate } from "../utils/helpers";

function Experience({ data }) {
  const [logoImage, setLogoImage] = useState("");

  // Get the image
  useEffect(() => {
    import(`../content/images/logos/${data.logoImage}`).then((image) => {
      setLogoImage(image.default);
    });
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
            <img className="experience-logo-image" src={logoImage} />
            <div className="experience-title-subtitle-container">
              <div className="experience-title-container">
                <h2>{data.position}</h2>
              </div>
              <div className="experience-subtitle">{data.company}</div>
            </div>
          </div>
          <div className="experience-description subdued-font">{data.description}</div>
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
