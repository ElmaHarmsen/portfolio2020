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
            <h2>01.09.17 - 2021 | Hanzehogeschool in Groningen, the Netherlands. Bachelor Communication & Multimedia Design.</h2>
            <h2>
              Starting my design and development journey in my hometown located in the very north of the Netherlands, I joined the Hanze for my bachelor program. 
              After surviving through various courses related to designing, I started appreciating the ones in development much more, and as such I adjusted my education program.
            </h2>              
          </div>
          <img src={require("../assets/netherlands.svg")} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h2>21.08.19 - 31.01.20 | Business Academy in Aarhus, Denmark. Minor Web Development.</h2>
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
            <h2>07.09.20 - 15.01.21 | Appademic in Groningen, the Netherlands. Frontend development internship.</h2>
            <h2>
              Continuing my bachelor program with an internship back in the Netherlands, I supported the Appademic team with my frontend and design skills. 
              I learned a good deal about the framework Vue and the state management system Vuex, so I was able to put knowledge and experience into real life purposes.
            </h2>
          </div>
          <img src={require("../assets/netherlands.svg")} />
        </SwiperSlide>
        <SwiperSlide><div className="swiper-slide"><h2>The future is an unshaped path which this professional journey will follow.</h2></div></SwiperSlide>
        <div className="swiper-navigation">
          <div className="swiper-prev"><svg height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg></div>
          <div className="swiper-next"><svg height="50" viewBox="0 0 24 24" width="50"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"/></svg></div>
        </div>
      </Swiper>
    </section>
  );
}

export default About;