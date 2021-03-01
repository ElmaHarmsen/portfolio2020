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
          <div className="swiper-slide">
            <h2>{dictionary("about_hanze_intro", props.languageSetting)}</h2>
            <h2>
              Starting my design and development journey in my hometown located in the very north of the Netherlands, I joined the Hanze for my bachelor program. 
              After surviving through various courses related to designing, I started appreciating the ones in development much more, and as such I adjusted my education program.
            </h2>              
          </div>
          <img src={require("../assets/netherlands.svg")} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h2>{dictionary("about_aarhus_intro", props.languageSetting)}</h2>
            <h2>
              Following up to my interests I chose for a minor outside of the Dutch borders. 
              The courses varied from frontend development to backend development, and from basic databases to interaction & experience design.
              Now having an incredible amount of experience, having met many friendly people, and having seen the marvelous city of Aarhus merged with the stunning landscapes of Denmark, 
              made me cherish this country as something having shaped my future.
            </h2>
          </div>
          <img src={require("../assets/denmark.svg")} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h2>{dictionary("about_appademic_intro", props.languageSetting)}</h2>
            <h2>
              Continuing my bachelor program with an internship back in the Netherlands, I supported the Appademic team with my frontend and design skills. 
              I learned a good deal about the framework Vue and the state management system Vuex, so I was able to put knowledge and experience into real life purposes.
            </h2>
          </div>
          <img src={require("../assets/netherlands.svg")} />
        </SwiperSlide>
        <SwiperSlide><div className="swiper-slide"><h2>{dictionary("about_future_intro", props.languageSetting)}</h2></div></SwiperSlide>
        <div className="swiper-navigation">
          <div className="swiper-prev"><svg height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg></div>
          <div className="swiper-next"><svg height="50" viewBox="0 0 24 24" width="50"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"/></svg></div>
        </div>
      </Swiper>
    </section>
  );
}

export default About;