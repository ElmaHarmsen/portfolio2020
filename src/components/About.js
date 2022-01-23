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
        <h1>a story</h1>
      </section>
      <section className='section-bottom'>
        <h2>About Me</h2>
      </section>
    </section>
  );
}

export default About;