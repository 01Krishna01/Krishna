import React from "react";
import addressData from "./address.json";

const Address = () => {
  const permanent = addressData["permanent Address"];
  const current = addressData["Currenent Address"];
  const correspondence = addressData["correspondence Address"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Permanent Address</h2>
      <p>Street: {permanent.Street}</p>
      <p>City: {permanent.city}</p>
      <p>State: {permanent.State}</p>
      <p>Pin-code: {permanent["Pin-code"]}</p>

      <h2>Current Address</h2>
      <p>Street: {current.Street}</p>
      <p>City: {current.city}</p>
      <p>State: {current.State}</p>
      <p>Pin-code: {current["Pin-code"]}</p>

      <h2>Correspondence Address</h2>
      <p>{correspondence.Checkbox}</p>
    </div>
  );
};

export default Address;
