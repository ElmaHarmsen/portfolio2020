import React from 'react';
import '../Header.scss';
import NextArrow from '../components/NextArrow.js';

function Header() {
  return (
    <section>
      <div className="Header">
        <div className="section-top">
          <h1>Welcome!</h1>
        </div>
        <NextArrow />
      </div>
    </section>
  )
}

export default Header;
