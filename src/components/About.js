import React, { useState, useEffect } from 'react';
import '../About.scss';

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import dictionary from '../languages';
SwiperCore.use(Navigation);

function About(props) {

  return (
    <section className="About">
      <h1 className="about-title">Elma's <br className="sm-only"></br>{dictionary("about_title", props.languageSetting)}</h1>
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
          <div className="swiper-side">
            <div className="about-me">
              <img className="slide-me" src={require("../assets/me.jpg")} />
              <h2 className="about-me-intro">{dictionary("about_me_intro", props.languageSetting)}</h2>
            </div>
            <h2>{dictionary("about_me_summary", props.languageSetting)}</h2>
            <h2>{dictionary("about_me_readmore", props.languageSetting)}</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h2>{dictionary("about_hanze_intro", props.languageSetting)}</h2>
            <h2>{dictionary("about_hanze_story", props.languageSetting)}</h2>              
          </div>
          <img className="slide-flag" src={require("../assets/hanze.png")} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h2>{dictionary("about_aarhus_intro", props.languageSetting)}</h2>
            <h2>{dictionary("about_aarhus_story", props.languageSetting)}</h2>
          </div>
          <img className="slide-flag" src={require("../assets/denmark.svg")} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h2>{dictionary("about_appademic_intro", props.languageSetting)}</h2>
            <h2>{dictionary("about_appademic_story", props.languageSetting)}</h2>
          </div>
          <img className="slide-flag" src={require("../assets/netherlands.svg")} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h2>{dictionary("about_future_intro", props.languageSetting)}</h2>
            <h2>{dictionary("about_future_story", props.languageSetting)}</h2>
          </div>
          <img className="slide-flag" src={require("../assets/european-union.svg")} />
        </SwiperSlide>
        <div className="swiper-navigation">
          <div className="swiper-prev"><svg height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg></div>
          <div className="swiper-next"><svg height="50" viewBox="0 0 24 24" width="50"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"/></svg></div>
        </div>
      </Swiper>
    </section>
  );
}

export default About;