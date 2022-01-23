import React, { useState } from 'react';
import cc from "classcat";
import dictionary from "../languages";
import '../Footer.scss';

function Footer(props) {
  const [currentColumn, setColumn] = useState(null);

  return (
    <section className='contact'>
      <section className="section-top">
        <h1>Let's</h1>
      </section>
      <section className='section-bottom'>
        <h2>Reach Out</h2>
        <div className="contact-info">
          <a className="contact-link-container" href="mailto:elmaharmsen01@gmail.com" target="blank">
            <div className="contact-link">
              <img className='contact-link-icon' src={require("../assets/contact-2.png")} />
            </div>
            <h3>{dictionary("contact_mail", props.languageSetting)}</h3>
          </a>
          <a className="contact-link-container" href="https://drive.google.com/file/d/1nfJM1PvPeCaF-epkzyHT4DNn3pVM6MvL/view?usp=sharing" target="blank">
            <div className="contact-link">
              <img className='contact-link-icon' src={require("../assets/cv.png")} />
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
      {/* <div className="Footer">
        <div className="contact-header">
          <h1 className="contact-title">{dictionary("footer_title_first_word", props.languageSetting)} <br className="sm-only"></br> {dictionary("footer_title", props.languageSetting)}</h1>
          <h2>
            {dictionary("footer_subgreet_1", props.languageSetting)}<br></br>
            {dictionary("footer_subgreet_2", props.languageSetting)}
          </h2>
        </div>
        <div className="contact-links-wrapper">
          <div className={cc(["contact-links", currentColumn && "highlight--" + currentColumn ])}>
            <a onMouseEnter={() => setColumn(1)} onMouseLeave={() => setColumn(null)} href="https://drive.google.com/file/d/1nfJM1PvPeCaF-epkzyHT4DNn3pVM6MvL/view?usp=sharing" target="blank"><img src={require("../assets/cv.svg")} /></a>
            <a onMouseEnter={() => setColumn(2)} onMouseLeave={() => setColumn(null)} href="mailto:elmaharmsen01@gmail.com"><img src={require("../assets/gmail.svg")} /></a>
            <a onMouseEnter={() => setColumn(3)} onMouseLeave={() => setColumn(null)} href="https://github.com/ElmaHarmsen" target="blank"><img src={require("../assets/github-logo.svg")} /></a>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Footer;