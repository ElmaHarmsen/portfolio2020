import React, { useState, useEffect } from 'react';
import dictionary from "../languages";
import '../Header.scss';

function Header(props) {

  return (
    <section className='header'>
      <section className="section-top">
        <h1>portfolio</h1>
      </section>
      <section className='section-bottom'>
        <h2>Elma</h2>
      </section>
      <div className="map-container">
        {
          props.darkTheme
          ? <div className='map-color'></div>
          : <div className='map-black'></div>
        }
      </div>
    </section>
  )
}

export default Header;