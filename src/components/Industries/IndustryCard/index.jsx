import React from "react";
import "./IndustryCard.css";

const IndustryCard = ({ name, icon, description }) => {
  return (
    <div className="industry_card">
      <div className="icon_container">{icon}</div>
      <h3 className="name">{name}</h3>
      <p className="text_muted description">{description}</p>
    </div>
  );
};

export default IndustryCard;
