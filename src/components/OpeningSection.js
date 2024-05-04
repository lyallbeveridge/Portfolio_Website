import React, { useEffect, useState } from "react";
import GlobeAnimation from "./GlobeAnimation";
import ProfileAnimation from "./ProfileAnimation";
import HardwareAnimation from "./HardwareAnimation";
import ReactMarkdown from "react-markdown";
// import openingSectionContent from '../../public/content/opening-section.md';

function OpeningSection() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('/Portfolio_Website/content/opening-section.md')
    .then(response => {
      if (!response.ok) { throw response }
      return response.text()
    })
    .then(data => {
      setText(data);
    })
    .catch(err => {
      console.log('Fetch Error: ', err);
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
