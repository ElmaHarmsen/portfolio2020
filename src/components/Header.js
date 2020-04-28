import React from 'react';
import '../Header.scss';
import NextArrow from '../components/NextArrow.js';

function Header() {
  return (
    <section className="Header">
      <div>
        <h1>This is the homepage.</h1>
        <h2>Here I will present something cute.</h2>
        <p>It is going to draw attention.</p>
      </div>
      <NextArrow />
    </section>
  )
}

export default Header;
