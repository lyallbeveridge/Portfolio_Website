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

  useEffect(() => {
    import(`../content/images/covers/${data.id}-cover.png`).then((image) => {
      setCoverImage(image.default);
    });
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
              {data.description}
            </div>

            {data.links.length > 0 && (
              <div className="links-tags">
                {data.links.map((link) => (
                  <a href={link.url} className="link-tag" target="_blank" rel="noopener noreferrer" key={link.url}>
                    <svg
                      className="link-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      // style={{fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: ""}}
                    >
                      <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                      <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
                    </svg>
                    {link.text}
                  </a>
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
      {/* <div className="project-container" id={`${data.id}-project-container`}>
        <div className="project-container-siderails" />
        <div className="project-header-container">
          <div className="project-title-subtitle-container">
            <div className="project-title-container">
              <div>
                <h3>{data.title}</h3>
              </div>
            </div>
            <p className="project-subtitle">{data.description}</p>
          </div>
          <div className="project-container-siderails">
            <button
              className="expand-project-btn"
              onClick={toggleContentExpand}
            >
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
      </div> */}
    </>
  );
}

export default Project;
