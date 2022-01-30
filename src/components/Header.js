import React, { useState, useEffect } from 'react';
import dictionary from "../languages";
import '../Header.scss';

function Header(props) {

  return (
    <section className='header'>
      <section className="section-top">
        <h1 className='animated-text-top'>portfolio</h1>
      </section>
      <section className='section-bottom'>
        <h2 className='animated-text-bottom'>Elma</h2>
      </section>
      <div className="map-container">
        {
          props.darkTheme
          ? <div className='map-color'></div>
          : <div className='map-black'></div>
        }
      </div>
      {/* <div className="section-button">
        <h4>NEXT SECTION</h4>
      </div> */}
    </section>
  )
}

export default Header;