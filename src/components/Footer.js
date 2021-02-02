import React, { useState } from 'react';
import cc from "classcat";
import '../Footer.scss';

function Footer() {
  const [currentColumn, setColumn] = useState(null);

  return (
    <section>
      <div className="Footer">
        <div className="contact-header">
          <h1 className="contact-title">Explore <br className="sm-only"></br> new Worlds</h1>
          <h2>
            ...is the best course to find new opportunities! <br></br>
            Feel like reaching out? Please use one of these.
          </h2>
        </div>
        <div className="contact-links-wrapper">
          <div className={cc(["contact-links", currentColumn && "highlight--" + currentColumn ])}>
            <span className="sm-line-divider"></span>
            <a onMouseEnter={() => setColumn(1)} onMouseLeave={() => setColumn(null)} href="https://drive.google.com/file/d/12nMt10qPcNYyFJ9FUwosLf1GufMhQjxD/view?usp=sharing" target="blank"><img src={require("../assets/cv.svg")} /></a>
            {/* <span className="sm-line-divider"></span> */}
            <a onMouseEnter={() => setColumn(2)} onMouseLeave={() => setColumn(null)} href="mailto:elmaharmsen01@gmail.com"><img src={require("../assets/gmail.svg")} /></a>
            {/* <span className="sm-line-divider"></span> */}
            <a onMouseEnter={() => setColumn(3)} onMouseLeave={() => setColumn(null)} href="https://www.linkedin.com/in/elma-harmsen-087872181/" target="blank"><img src={require("../assets/linkedin.svg")} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;