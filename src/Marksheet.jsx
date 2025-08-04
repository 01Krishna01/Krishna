import React from "react";
import marksheet from "./marksheet.json";

const Marksheet = () => {
  const { studentName, rollNumber, course, college, years } = marksheet;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{college}</h1>
      <h2>Marksheet</h2>
      <p><strong>Name:</strong> {studentName}</p>
      <p><strong>Roll Number:</strong> {rollNumber}</p>
      <p><strong>Course:</strong> {course}</p>

      <hr />
      {years.map((sem, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          <h3>{sem.year}</h3>
          <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {sem.subjects.map((subject, idx) => (
                <tr key={idx}>
                  <td>{subject.name}</td>
                  <td>{subject.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Marksheet;
