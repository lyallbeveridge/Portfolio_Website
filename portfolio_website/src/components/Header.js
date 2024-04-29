import React from "react";

function Header() {
  return (
    <>
      {
        "G'day! My name is Lyall Beveridge, and this is my digital portfolio. Here, you'll find a showcase of my engineering and computer science projects, each detailed with insights into my creative process and the technologies I use."
      }
      <div>
        <br />
        {"> "} Sydney, Australia
        <br />
        {"> "} University of New South Wales Graduate
        <br />
        {"> "}
        <a
          href="https://www.linkedin.com/in/lyall-beveridge"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <br />
        {"> "}
        <a
          href="https://github.com/lyallbeveridge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <br />
        {"> "} <a href="mailto:lyall.beveridge@gmail.com">Email</a>
      </div>
    </>
  );
}

export default Header;
