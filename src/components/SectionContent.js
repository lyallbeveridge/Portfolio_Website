import React from "react";

export default function SectionHeader({ children, containerDivId }) {
  return (
    <div id={containerDivId}>
      {children}
    </div>
  );
}