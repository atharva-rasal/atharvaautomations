import React from "react";
import "../About/About.css";
// import "./About.css";
import { about_1, about_2, about_3, about_main } from "../../assets";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="column company_photo">
          <img src={about_main} alt="atharva automations" />
        </div>
        <div className="column">
          <h1 className="title">
            <span className="g-text">About Us</span>
          </h1>
          <h3 className="sub_title">Smart Automation. Smarter Industries.</h3>
          <div className="company_media_container">
            <div className="box">
              <img src={about_1} alt="" />
            </div>
            <div className="box">
              <img src={about_2} alt="" />
            </div>
            <div className="box">
              <img src={about_3} alt="" />
            </div>
          </div>
          <p className="text_muted description">
            Atharva Automations is a Mumbai-based automation solution provider
            with proven expertise across industries like steel, rubber, dairy,
            water treatment, pharma, packaging, and more. With hands-on
            experience in PLCs (Siemens, ABB, AB, Mitsubishi, Omron) and SCADA
            systems (WINCC, RSView, Indusoft, InTouch), we deliver
            high-performance solutions tailored to specific industrial needs.
            We’ve successfully executed complex projects with up to 2000 I/Os
            across India and abroad — including Tata Steel, Pepsico, Lupin,
            Jubilant Pharma, and many more. From control panel programming to
            real-time data monitoring and test bench automation, we enable
            industries to operate smarter, faster, and more reliably.
          </p>
          <div className="group">
            <div className="row">
              <div className="icon_container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text_muted">Consultation</p>
                <h3>Free</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text_muted">Expert</p>
                <h3>Engineer</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text_muted">Customer</p>
                <h3>Support</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text_muted">Quality</p>
                <h3>Service</h3>
              </div>
            </div>
          </div>
          <div className="buttons_container">
            <Link to="project" smooth={true} className="btn">
              {" "}
              Explore
            </Link>
            <Link to="contact" smooth={true} className="btn btn_primary">
              {" "}
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
