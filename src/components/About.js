import React, { useState, useEffect } from 'react';
import '../About.scss';

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import dictionary from '../languages';
SwiperCore.use(Navigation);

function About(props) {

  return (
    <section className="about">
      <section className="section-top">
        <h1>what</h1>
      </section>
      <section className='section-bottom'>
        <h2>About Me?</h2>
        <div className="about-info">
          <h3>{dictionary("about_info", props.languageSetting)}</h3>
          <h3 className='bottom-alinea'>{dictionary("about_collaboration", props.languageSetting)}</h3>
        </div>
      </section>
      <div className="about-visuals">
        <div className="about-image-container">
          <img className='about-image' src={require("../assets/me.jpg")} alt="" />
        </div>
        <div className="map-container">
        {
          props.darkTheme
          ? <div className='map-color'></div>
          : <div className='map-black'></div>
        }
      </div>      
    </div> 
    </section>
  );
}

export default About;