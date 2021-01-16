import React, { useState } from 'react';
import '../Footer.scss';
import Contact from './Contact.js';
import '../Contact.scss';

function Footer() {

  return (
    <section>
      <div className="Footer">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-info">
            <a href="https://drive.google.com/file/d/12nMt10qPcNYyFJ9FUwosLf1GufMhQjxD/view?usp=sharing" target="blank">
              <h2>My Resume/Cv</h2>
            </a>
            <a href="mailto:elmaharmsen01@gmail.com"><h2>elmaharmsen01@gmail.com</h2></a>
            <a href="https://www.linkedin.com/in/elma-harmsen-087872181/" target="blank">
              <h2>LinkedIn</h2>
            </a>
          </div>
        </div>
    </section>
  );
}

export default Footer;