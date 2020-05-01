import React from 'react';
import '../Header.scss';
import NextArrow from '../components/NextArrow.js';

function Header() {
  return (
    <section className="Header">
      <div>
        <h1>This is the awesome sweet cute interesting animated homepage. </h1>
      </div>
      <NextArrow />
    </section>
  )
}

export default Header;
