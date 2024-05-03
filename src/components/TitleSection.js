import React from "react";
import TitleASCII from "./TitleASCII";
import IconLinkTray from "./IconLinkTray";
import "../styles/titleSection.css";
import SubtitleAnimation from "./SubtitleAnimation";

export default function TitleSection() {


  return (
    <div>
      <TitleASCII />
      <SubtitleAnimation />
      <div id="contents-links">
        <div className="content-link">
          {"> "}&nbsp;
          <a
            href="#skills"
            onClick={(event) => {
              event.preventDefault();
              document
                .querySelector("#skills")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </a>
        </div>
        <div className="content-link">
          {"> "}&nbsp;
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
        </div>
      </div>
      <IconLinkTray />
    </div>
  );
}
