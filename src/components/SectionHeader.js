import React from "react";
import Divider from "./Divider";

export default function SectionHeader({ children}) {
  return (
    <>
    <Divider />
      {children}
    <Divider />
    </>
  );
}