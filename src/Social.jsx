import React from "react";
import socialData from "./SocialProfile.json";

const Social = () => {
  const social = socialData["Social Information"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Social Information</h2>
      <ul>
        <li>
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href={social.Linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={social.GitHub} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={social.Twitter} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
