import React, { useState } from 'react';
import cc from "classcat";
import dictionary from "../languages";
import '../Footer.scss';

function Footer(props) {
  const [currentColumn, setColumn] = useState(null);

  return (
    <section>
      <div className="Footer">
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
      </div>
    </section>
  );
}

export default Footer;