import React from "react";
import profile from "./Idcarddata.json";

const ICard = () => {
  return (
    <div
      style={{
        width: "350px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={profile.photo}
          alt="Profile"
          style={{ width: "120px", height: "120px", borderRadius: "50%" }}
        />
        <h2>{profile.name}</h2>
        <p><strong>ID:</strong> {profile.id}</p>
        <p><strong>Designation:</strong> {profile.designation}</p>
        <p><strong>Department:</strong> {profile.department}</p>
      </div>
      <div style={{ marginTop: "15px" }}>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Address:</strong> {profile.address}</p>
      </div>
    </div>
  );
};

export default ICard;
