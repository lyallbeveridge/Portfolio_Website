import React from "react";
import Divider from "./Divider";
import "../styles/main.css";

export default function SectionHeader({ children, containerDivId }) {
  return (
    <>
      <Divider />
      <div id="containerDivId" className="section-header">{children}</div>
      <Divider />
    </>
  );
}
