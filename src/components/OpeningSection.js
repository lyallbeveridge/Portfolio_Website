import React, { useEffect, useState } from "react";
import GlobeAnimation from "./GlobeAnimation";
import ProfileAnimation from "./ProfileAnimation";
import HardwareAnimation from "./HardwareAnimation";
import ReactMarkdown from "react-markdown";
import openingSectionContent from '../content/opening-section.md';

function OpeningSection() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(openingSectionContent)
      .then(response => response.text())
      .then(data => {
        setText(data);
      });
  }, []);

  return (
    <>
      {/* <GlobeAnimation/> */}
      <ProfileAnimation />
      <HardwareAnimation />
      <ReactMarkdown>{text}</ReactMarkdown>
    </>
  );
}

export default OpeningSection;
