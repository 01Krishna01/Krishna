import React from "react";
import languageData from "./Language.json";

const Language = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Language Skills</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Language</th>
            <th>Spoken</th>
            <th>Written</th>
          </tr>
        </thead>
        <tbody>
          {languageData.languages.map((lang, index) => (
            <tr key={index}>
              <td>{lang.name}</td>
              <td>{lang.spoken}</td>
              <td>{lang.written}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Language;
