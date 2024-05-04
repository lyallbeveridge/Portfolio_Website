import React from "react";
import Divider from "./Divider";
import "../styles/main.css";

export default function SectionHeader({ children, containerDivId }) {
  return (
    <div id={containerDivId} className="section-header">
      <Divider />
      {children}
      <Divider />
    </div>
  );
}
