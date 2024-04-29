import React from "react";

function Project({ data }) {
  return (
    <div>
      <h2>{data.title}</h2>
      {data.longDescription && <p>{data.longDescription}</p>}
    </div>
  );
}

export default Project;
