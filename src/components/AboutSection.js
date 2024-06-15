import React, { useEffect, useState } from "react";
import "../styles/about.css";
import ReactMarkdown from "react-markdown";

function AboutSection() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/content/opening-section.md")
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.text();
      })
      .then((data) => {
        setText(data);
      })
      .catch((err) => {
        console.log("Fetch Error: ", err);
      });
  }, []);

  return (
    <>
      <ReactMarkdown>{text}</ReactMarkdown>
    </>
  );
}

export default AboutSection;
