import React, { useState, useEffect } from 'react';
import '../About.scss';

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use(Navigation);

function About() {

  const [currentSlide, changeSlide] = useState({
    id: 2,
    description1: "The past. At the moment. Future plans.",
  });

  const aboutParagraphs = [
    { //short story around these events
      id: 1,
      eventCMD: "01.09.17. Netherlands, Groningen. Bachelor Communication & Multimedia Design.",
    },
    {
      id: 2,
      description1: "21.08.19 - 31.01.20. Denmark, Aarhus. Minor Web Development.",
      description2: "07.09.20 - 15.01.21. Netherlands, Groningen. Internship at Appademic."
    },
    {
      id: 3,
      description1: "Somethime. Somewhere. Something.",
    }
  ] //The paragraphs with stuff about me.

  // const paragraphs = aboutParagraphs.map((item) =>
  //   <div className="slide" key={item.title}>
  //     <div className="paragraph-text">
  //       <p>{item.description}</p>
  //     </div>
  //   </div>
  // )

  // useEffect(() => {
  //   nextSlide();
  // }, []); //Runs once

  // function nextSlide() {
  //   const slides = document.querySelectorAll(".paragraphs-slides .slide"); 
  //   slides.forEach(slide => slide.classList.remove("skills-showing"));
  //   slides[currentSlide].classList.add("skills-showing");
  //   if (currentSlide < slides.length - 1) { 
  //     changeSlide(currentSlide +1);
  //   }
  //   else {
  //     changeSlide(0);
  //   }
  // }

  return (
    <section className="About">
      <h1 className="about-title">a Professional Journey</h1>
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
            <h2>01.09.17. Netherlands, Groningen. Bachelor Communication & Multimedia Design.</h2>
            <img src={require("../assets/netherlands.svg")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h2>21.08.19 - 31.01.20. Denmark, Aarhus. Minor Web Development.</h2>
            <img src={require("../assets/denmark.svg")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h2>07.09.20 - 15.01.21. Netherlands, Groningen. Internship at Appademic.</h2>
            <img src={require("../assets/netherlands.svg")} />
          </div>
        </SwiperSlide>
        <SwiperSlide><div className="swiper-slide"><h2>Future</h2></div></SwiperSlide>
        <div className="swiper-navigation">
          <div className="swiper-prev"><img src={require("../assets/left-arrow.svg")} /></div>
          <div className="swiper-next"><img src={require("../assets/right-arrow.svg")} /></div>
        </div>
      </Swiper>
      {/* <img className="about-globe" src={require("../assets/globe.svg")} /> */}
      {/* <div className="the-about">
        <h2>{currentSlide.description1}</h2>
        <h2>{currentSlide.description2}</h2>
        <h2>{currentSlide.description3}</h2>
      </div>
      <div className="the-timeline"> 
        <div>
          <div><img onClick={() => changeSlide(aboutParagraphs.find(slide => slide.id === 1))} src={require("../assets/ufo.svg")} /></div>
          <span></span>
          <div><img onClick={() => changeSlide(aboutParagraphs.find(slide => slide.id === 2))} src={require("../assets/ufo.svg")} /></div>
          <span></span>
          <div><img onClick={() => changeSlide(aboutParagraphs.find(slide => slide.id === 3))} src={require("../assets/ufo.svg")} /></div>
        </div>
      </div> */}
    </section>
  );
}

export default About;