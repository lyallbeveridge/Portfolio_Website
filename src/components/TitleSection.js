import React from "react";
import TitleASCII from "./TitleASCII";
import "../styles/titleSection.css";
import IconLinkTray from "./IconLinkTray";
import SubtitleAnimation from "./SubtitleAnimation";
import ProfileAnimation from "./ProfileAnimation";

export default function TitleSection() {
  return (
    <div id="title-section">
      <div className="title-third">
        <ProfileAnimation />
      </div>
      <div className="title-third" id="title-center-third">
        <TitleASCII />
        {/* <SubtitleAnimation /> */}
        <div id="contents-links-container">
          <ul id="contents-links-ul">
            <li>
              {" "}
              <a
                href="#about"
                onClick={(event) => {
                  event.preventDefault();
                  document
                    .querySelector("#about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(event) => {
                  event.preventDefault();
                  document
                    .querySelector("#experience")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(event) => {
                  event.preventDefault();
                  document
                    .querySelector("#projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="title-third">
        <IconLinkTray />
      </div>
    </div>
  );
}
