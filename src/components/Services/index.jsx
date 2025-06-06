import React from "react";
import "./Services.css";
import { services } from "../../data";
import ServiceCard from "./ServiceCard";
import Industries from "../Industries";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services_top">
          <h1 className="title">
            Our <span className="g-text">Services</span>
          </h1>
          <h3 className="sub_title">Various services that we offer.</h3>
        </div>
        <div className="services_container">
          {services.map((service, index) => (
            <ServiceCard
              icon={service.icon}
              name={service.name}
              description={service.description}
              key={index}
            />
          ))}
        </div>
      </div>
      <Industries />
    </section>
  );
};

export default Services;
