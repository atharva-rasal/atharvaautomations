import React from "react";
import "./Industries.css";
import { industries } from "../../data";
import IndustryCard from "./IndustryCard";

const Industries = () => {
  console.log(industries);
  return (
    <section id="industry">
      <div className="container">
        <div className="industry_top">
          <h1 className="title">
            Industries <span className="g-text">We Serve</span>
          </h1>
        </div>
        <div className="industry_container">
          {industries.map((industry, index) => (
            <IndustryCard
              icon={industry.icon}
              name={industry.name}
              description={industry.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
