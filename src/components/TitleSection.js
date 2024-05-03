import React from "react";
import TitleASCII from "./TitleASCII";
import IconLinkTray from "./IconLinkTray";
import "../styles/titleSection.css";
import SubtitleAnimation from "./SubtitleAnimation";

export default function TitleSection() {
  return (
    <>
      <TitleASCII />
      <SubtitleAnimation />
      <div id="contents-links">
        <ul>
          <li>
            {" "}
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
      <IconLinkTray />
    </>
  );
}
