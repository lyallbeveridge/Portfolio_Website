import React from "react";
import TitleASCII from "./TitleASCII";
import IconLinkTray from "./IconLinkTray";
import "../styles/titleSection.css";

export default function TitleSection() {
  return (
    <div>
      <TitleASCII />
      <div id="subtitle-animation">{"> "}Full stack developer_</div>
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
