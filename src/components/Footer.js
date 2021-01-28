import React, { useState } from 'react';
import cc from "classcat";
import '../Footer.scss';

function Footer() {
  const [currentColumn, setColumn] = useState(null);

  return (
    <section>
      <div className="Footer">
        <h1 className="contact-title">Explore new Worlds</h1>
        <h2>
          ...is the best course to find new opportunities! <br></br>
          Feel like reaching out? Please use one of these.
        </h2>
        <div className={cc(["contact-links", currentColumn && "highlight--" + currentColumn ])}>
          <a onMouseEnter={() => setColumn(1)} onMouseLeave={() => setColumn(null)} href="https://drive.google.com/file/d/12nMt10qPcNYyFJ9FUwosLf1GufMhQjxD/view?usp=sharing" target="blank"><img src={require("../assets/cv.svg")} /></a>
          <a onMouseEnter={() => setColumn(2)} onMouseLeave={() => setColumn(null)} href="mailto:elmaharmsen01@gmail.com"><img src={require("../assets/gmail.svg")} /></a>
          <a onMouseEnter={() => setColumn(3)} onMouseLeave={() => setColumn(null)} href="https://www.linkedin.com/in/elma-harmsen-087872181/" target="blank"><img src={require("../assets/linkedin.svg")} /></a>
        </div>
        {/* <div className="contact-info">
          <a className="footer-link" onMouseEnter={() => setColor("transparent")} href="https://drive.google.com/file/d/12nMt10qPcNYyFJ9FUwosLf1GufMhQjxD/view?usp=sharing" target="blank">
            <img src={require("../assets/cv.svg")} />
          </a>
          <a className="footer-link" onMouseEnter={() => setColor("transparent")} href="mailto:elmaharmsen01@gmail.com">
            <img src={require("../assets/gmail.svg")} />
          </a>
          <a className="footer-link" style={{ backgroundColor: currentColor}} onMouseEnter={() => setColor("transparent")} href="https://www.linkedin.com/in/elma-harmsen-087872181/" target="blank">
            <img src={require("../assets/linkedin.svg")} />
          </a>
        </div> */}
      </div>
      {/* <img className="footer-world" src={require('../assets/planet.svg')}/> */}
    </section>
  );
}

export default Footer;