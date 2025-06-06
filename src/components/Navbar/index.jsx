import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { navTabs } from "../../data";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "../Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const container = useRef(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 145) {
      return setVisible(true);
    }
    setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(".navabr", { y: -250 }, { y: 0, top: 0 });
    }
  }, [visible]);

  useGSAP(
    () => {
      const timeline = gsap.timeline({ stagger: 0.5 });
      timeline
        .from(".logo", { opacity: 0, x: -100, delay: 1 })
        .from(".tab", { opacity: 0, stagger: 0.5 })
        .from(".buttons", { opacity: 0, x: 100 });
    },
    { scope: container }
  );

  return (
    <nav className={`navbar ${visible ? "visible" : ""}`} ref={container}>
      {open ? (
        <div className="sidebar_overlay" onClick={() => setOpen(!open)}></div>
      ) : (
        ""
      )}
      <Logo />
      <div className={`box nav_tabs ${open ? "open" : ""}`}>
        <div
          className="icon_container cancel_btn"
          onClick={() => setOpen(!open)}
        >
          <FaTimes />
        </div>
        {navTabs.map((tab, index) => (
          <Link
            to={tab.id}
            className="tab"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-70}
            onClick={() => setOpen(false)}
            key={index}
          >
            <p>{tab.name}</p>
          </Link>
        ))}
      </div>
      <div className="box buttons">
        <Link to="contact" className="btn contact_btn">
          Contact Us
        </Link>
        <div className="icon_container menu_btn" onClick={() => setOpen(!open)}>
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
