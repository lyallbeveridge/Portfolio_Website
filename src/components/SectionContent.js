import React from "react";

export default function SectionContent({ children, containerDivId }) {
  return (
    <div id={containerDivId} className="section-content">
      {children}
    </div>
  );
}
