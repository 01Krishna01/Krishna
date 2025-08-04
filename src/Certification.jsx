import React from "react";
import certData from "./Certification.json";

const Certification = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Certification Details</h2>
      {certData.certifications.map((cert, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3>{cert.courseName}</h3>
          <p><strong>Platform:</strong> {cert.platform}</p>
          <p><strong>Date:</strong> {cert.date}</p>
          <p>
            <strong>Credential:</strong>{" "}
            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Certification;
