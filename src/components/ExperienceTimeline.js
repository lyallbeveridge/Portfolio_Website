import React, { useEffect, useState } from "react";
import Experience from "./Experience";
import "../styles/projectTimeline.css";

const ExperienceTimeline = () => {
  const [experienceData, setExperiencesData] = useState([]);

  // Fetch the project data
  useEffect(() => {
    fetch("/content/experiences.json")
      .then((response) => response.json())
      .then((data) => {
        setExperiencesData(data);
      });
  }, []);

  return (
    <>
      {experienceData.map((projectJSON) => (
        <Experience data={projectJSON} key={projectJSON.id} />
      ))}

      {/* Footer */}
      <div className="siderail-vline-terminator section-content-siderail">
        *
      </div>
    </>
  );
};

export default ExperienceTimeline;
