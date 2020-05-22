import React, { useState } from 'react';
import '../Footer.scss';
import Contact from './Contact.js';
import '../Contact.scss';

function Footer() {

  const [isContactOpen, toggleContact] = useState(false);

  return (
    <section>
      <div className="Footer" onClick={() => toggleContact(!isContactOpen)}>
        <div className="lg-visible">
          <h2>so, want to</h2>
          <h1>meet<span>?</span></h1>
        </div>
        <div>
          <h2>click here for</h2>
          <h1>contact<span>!</span></h1>
        </div>
        <div className="lg-visible">
          <h2>then let's</h2>
          <h1>talk<span>.</span></h1>
        </div>
      </div>
      <Contact closeContact={() => toggleContact(false)} isContactOpen={isContactOpen} />
    </section>
  );
}

export default Footer;