import React from "react";
import resume from "./resume.json";

const Resume = () => {
  const { basics, education, skills, languages } = resume;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{basics.name}</h1>
      <h2>{basics.label}</h2>
      <p><strong>Email:</strong> {basics.email}</p>
      <p><strong>Phone:</strong> {basics.phone}</p>
      <p><strong>Gender:</strong> {basics.gender}</p>
      <p><strong>Location:</strong> {`${basics.location.address}, ${basics.location.city}, ${basics.location.region}, ${basics.location.country} - ${basics.location.postalCode}`}</p>
      <p><strong>Hobbies:</strong> {basics.Hobbies}</p>
      <p><strong>Summary:</strong> {basics.summary}</p>

      <hr />
      <h3>Education</h3>
      {education.map((edu, index) => (
        <div key={index}>
          <p><strong>{edu.institution}</strong> — {edu.area} ({edu.studyType})</p>
          <p>📅 {edu.startDate} to {edu.endDate} | GPA: {edu.gpa}</p>
        </div>
      ))}

      <hr />
      <h3>Skills</h3>
      {skills.map((skill, index) => (
        <div key={index}>
          <p><strong>{skill.name}:</strong> {skill.keywords.join(", ")}</p>
        </div>
      ))}

      <hr />
      <h3>Languages</h3>
      <ul>
        {languages.map((lang, index) => (
          <li key={index}>
            {lang.language} — {lang.fluency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
