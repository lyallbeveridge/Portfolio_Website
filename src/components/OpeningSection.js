import React from "react";
import GlobeAnimation from "./GlobeAnimation";
import ProfileAnimation from "./ProfileAnimation";
import HardwareAnimation from "./HardwareAnimation";

function OpeningSection() {
  return (
    <>
      {/* <GlobeAnimation/> */}
      <ProfileAnimation />
      <HardwareAnimation />
      <pre>
        {
          "G'day! My name is Lyall Beveridge, and this is my digital portfolio. Here, you'll find a showcase of my engineering and computer science projects, each detailed with insights into my creative process and the technologies I use.\n\nThis website itself is not only a demonstration of my frontend web development skills but is also a testament to hackerzines, which were famous in the the early ???'s. [LINK]"
        }
      </pre>
    </>
  );
}

export default OpeningSection;
