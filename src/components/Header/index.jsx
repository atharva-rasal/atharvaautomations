import React, { useRef } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { hero_image } from "../../assets";
import { automation } from "../../assets";
import Achievement from "../Achievement";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({ delay: 1, stagger: 1 });
      timeline
        .fromTo(
          ".image_container",
          { scale: 0.5, opacity: 0, y: 150 },
          { scale: 1, ease: "sine.in", opacity: 1, y: 0 }
        )
        .from(".title", {
          opacity: 0,
          y: -30,
        })
        .from(".description", {
          opacity: 0,
          y: -30,
        })
        .from(".buttons_container", {
          opacity: 0,
          y: -40,
        });
    },
    { scope: container }
  );

  return (
    <header id="header" ref={container}>
      <div className="container full_height">
        <div className="row">
          <div className="column">
            <h1 className="title">
              Smarter Systems,{" "}
              <span className="g-text">Better Productivity</span>
            </h1>
            <p className="text_muted description">
              Trusted by global brands, we deliver high-performance automation
              systems using Siemens, ABB, AB, and Mitsubishi platforms. With
              2000+ I/O projects across industries, we turn industrial
              challenges into intelligent solutions.
            </p>
            <div className="buttons_container">
              <Link to="services" smooth={true} className="btn">
                Our Services
              </Link>
              <Link to="contact" smooth={true} className="btn btn_primary">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="image_container">
              <img src={automation} alt="" />
            </div>
          </div>
        </div>
        <Achievement />
      </div>
    </header>
  );
};

export default Header;
Header;
