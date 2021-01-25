import React, { useState } from 'react';
import '../Footer.scss';

function Footer() {
  const [currentColor, setColor] = useState(null);

  return (
    <section>
      <div className="Footer" style={{ backgroundColor: currentColor, borderColor: currentColor}}>
        <h1 className="contact-title">Explore new Worlds</h1>
        <h2>
          ...is the best course to find new opportunities! <br></br>
          Feel like reaching out? Please use one of these.
        </h2>
        <div className="contact-info">
          <a className="footer-link" onMouseEnter={() => setColor("transparent")} href="https://drive.google.com/file/d/12nMt10qPcNYyFJ9FUwosLf1GufMhQjxD/view?usp=sharing" target="blank">
            <h2>My Resume/CV</h2>
          </a>
          <a className="footer-link" onMouseEnter={() => setColor("transparent")} href="mailto:elmaharmsen01@gmail.com"><h2>elmaharmsen01@gmail.com</h2></a>
          <a className="footer-link" onMouseEnter={() => setColor("transparent")} href="https://www.linkedin.com/in/elma-harmsen-087872181/" target="blank">
            <h2>LinkedIn</h2>
          </a>
        </div>
      </div>
      <img className="footer-world" src={require('../assets/planet.svg')}/>
    </section>
  );
}

export default Footer;