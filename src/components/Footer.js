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
          <h2>So, want to</h2>
          <h2><span>meet</span>?</h2>
        </div>
        <div>
          <h2>Click here for</h2>
          <h2><span>contact</span>!</h2>
        </div>
        <div className="lg-visible">
          <h2>Then let's</h2>
          <h2><span>talk</span>:</h2>
        </div>
      </div>
      <Contact closeContact={() => toggleContact(false)} isContactOpen={isContactOpen} />
    </section>
  );
}

export default Footer;