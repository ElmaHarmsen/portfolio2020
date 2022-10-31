import React, { useState } from 'react';
import cc from "classcat";
import dictionary from "../languages";
import '../Contact.scss';

function Footer(props) {

  return (
    <section className='contact'>
      <section className="section-top">
      <h1>{dictionary("header_contact", props.languageSetting)}</h1>
      </section>
      <section className='section-bottom'>
        <h2></h2>
        <div className="contact-info">
          <a className="contact-link-container" href="mailto:elmaharmsen01@gmail.com" target="blank">
            <div className="contact-link">
              <img className='contact-link-icon' src={require("../assets/email.png")} />
            </div>
            <h2>{dictionary("contact_mail", props.languageSetting)}</h2>
          </a>
          <a className="contact-link-container" href="https://drive.google.com/file/d/1gfdF6MsC7xWMqPHCRiBZJQ03-YyR9s28/view?usp=sharing" target="blank">
            <div className="contact-link">
              <img className='contact-link-icon' src={require("../assets/resume.png")} />
            </div>
            <h2>{dictionary("contact_cv", props.languageSetting)}</h2>
          </a>
          <a className="contact-link-container" href="https://www.linkedin.com/in/elma-harmsen/" target="blank">
            <div className="contact-link">
              <img className='contact-link-icon' src={require("../assets/linkedin.png")} />
            </div>
            <h2>{dictionary("contact_social", props.languageSetting)}</h2>
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