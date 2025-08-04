import React from "react";
import emergencyData from "./Contact.json";

const Contact = () => {
  const contact = emergencyData.emergency_contact;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Emergency Contact</h2>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Relation:</strong> {contact.relation}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Address:</strong> {contact.address}</p>
    </div>
  );
};

export default Contact;
