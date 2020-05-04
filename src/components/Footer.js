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
        <h1>contact<span>!</span></h1>
      </div>
      <Contact isContactOpen={isContactOpen} />
    </section>
  );
}

export default Footer