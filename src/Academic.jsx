import React from "react";
import projectsData from "./Academic.json";

const Academic = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Academic Projects</h2>
      {projectsData.academicProjects.map((project, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "10px", marginBottom: "20px" }}>
          <h3>{project.title}</h3>
          <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
          <p><strong>Description:</strong> {project.description}</p>
          <p><strong>Outcome:</strong> {project.outcome}</p>
        </div>
      ))}
    </div>
  );
};

export default Academic;
