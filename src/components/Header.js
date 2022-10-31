import React, { useState, useEffect } from 'react';
import dictionary from '../languages';
import '../Header.scss';

function Header(props) {

  return (
    <section className='header'>
      <section className="section-top">
        <h1 className='animated-text-top'>Elma Harmsen</h1>
      </section>
      <section className='section-bottom'>
        <div className="header-info">
          <h2>{dictionary("home_info", props.languageSetting)}</h2>
        </div> 
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