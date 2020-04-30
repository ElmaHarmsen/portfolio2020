import React, { useState } from 'react';
import '../Footer.scss';
import Contact from './Contact.js';
import '../Contact.scss';

function Footer() {

  const [isContactOpen, toggleContact] = useState(false);

  return (
    <section>
      <div className="Footer" onClick={() => toggleContact(!isContactOpen)}>
        <h2>click here for</h2>
        <h1>contact</h1>
      </div>
      <Contact className={isContactOpen ? ".Contact open" : ".Contact"} />
    </section>
  );
}

export default Footer