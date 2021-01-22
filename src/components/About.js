import React, { useState, useEffect } from 'react';
import '../About.scss';

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use(Navigation);

function About() {

  return (
    <section className="About">
      <h1 className="about-title">Elma's <br className="sm-only"></br> Journey</h1>
      <Swiper
        spaceBetween={50}
        onSwiper={swiper => setTimeout(() => swiper.update())}
        className="swiper-container"
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev"
        }}
      >
        <SwiperSlide>
          <div className="swiper-slide">
            <h2>01.09.17. Groningen, the Netherlands. Bachelor Communication & Multimedia Design.</h2>
            <img src={require("../assets/netherlands.svg")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h2>21.08.19 - 31.01.20. Aarhus, Denmark. Minor Web Development.</h2>
            <img src={require("../assets/denmark.svg")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h2>07.09.20 - 15.01.21. Groningen, the Netherlands. Internship at Appademic.</h2>
            <img src={require("../assets/netherlands.svg")} />
          </div>
        </SwiperSlide>
        <SwiperSlide><div className="swiper-slide"><h2>Future</h2></div></SwiperSlide>
        <div className="swiper-navigation">
          <div className="swiper-prev"><svg height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg></div>
          <div className="swiper-next"><svg height="50" viewBox="0 0 24 24" width="50"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"/></svg></div>
        </div>
      </Swiper>
    </section>
  );
}

export default About;