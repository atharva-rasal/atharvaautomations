import React from "react";
import "./Contact.css";
import { contacts } from "../../data";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact_form">
          <div className="contact_form_top">
            <h1 className="title">
              <span className="g-text">Contact Us</span>
            </h1>
            <p className="text_muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              consequuntur corporis
            </p>
          </div>
          <div className="contact_form_middle">
            <div className="row">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                className="control"
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                className="control"
              />
            </div>
            <div className="row">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className="control"
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                className="control"
              />
            </div>
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Message"
              className="control"
            ></textarea>
          </div>
          <div className="contact_form_bottom">
            <button className="btn btn_primary">Send Now</button>
          </div>
        </div>
        <div className="contact_options">
          {contacts.map((contact, index) => (
            <div className="option" key={index}>
              <div className="icon_container">{contact.icon}</div>
              <h3 className="name">{contact.name}</h3>
              <h4 className="text_muted">{contact.value}</h4>
              <div>
                <a href={"#"} className="btn btn_primary">
                  Contact Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
