import React, { useState } from 'react';
import cc from "classcat";
import dictionary from "../languages";
import '../Contact.scss';

function Footer(props) {

  return (
    <section className='contact'>
      <section className="section-top">
        <h1>how to</h1>
      </section>
      <section className='section-bottom'>
        <h2>Contact Me</h2>
        <div className="contact-info">
          <a className="contact-link-container" href="mailto:elmaharmsen01@gmail.com" target="blank">
            <div className="contact-link">
              <img className='contact-link-icon' src={require("../assets/email-black.png")} />
            </div>
            <h3>{dictionary("contact_mail", props.languageSetting)}</h3>
          </a>
          <a className="contact-link-container" href="https://drive.google.com/file/d/1rYHABz0eXo0GQfOQ5TYRJPtOQTn0iwtl/view?usp=sharing" target="blank">
            <div className="contact-link">
              <img className='contact-link-icon' src={require("../assets/document.png")} />
            </div>
            <h3>{dictionary("contact_cv", props.languageSetting)}</h3>
          </a>
          <a className="contact-link-container" href="linkedin.com/in/elma-harmsen-087872181" target="blank">
            <div className="contact-link">
              <img className='contact-link-icon' src={require("../assets/linkedin.png")} />
            </div>
            <h3>{dictionary("contact_social", props.languageSetting)}</h3>
          </a>
        </div>
      </section>
      <div className="contact-image-container">
        <img className='contact-image' src={require("../assets/me.jpg")} alt="" />
      </div>
      <div className="button-container">
        <div className="button-back-to-top" onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}
        ></div>
      </div>
    </section>
  );
}

export default Footer;