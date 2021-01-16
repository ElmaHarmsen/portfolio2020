import React, { useState, useEffect } from 'react';
import '../About.scss';

function About() {

  const [currentSlide, changeSlide] = useState({
    id: 2,
    description1: "The past. At the moment. Future plans.",
  });

  const aboutParagraphs = [
    {
      id: 1,
      description1: "01.09.17. Netherlands, Groningen. Bachelor Communication & Multimedia Design.",
      description2: "21.08.19 - 31.01.20. Denmark, Aarhus. Minor Web Development.",
      description3: "07.09.20 - 15.01.21. Netherlands, Groningen. Internship at Appademic."
    },
    {
      id: 2,
      description1: "Somethime. Somewhere. Something.",
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
      <div className="the-about">
        <h2>{currentSlide.description1}</h2>
        <h2>{currentSlide.description2}</h2>
        <h2>{currentSlide.description3}</h2>
      </div>
      <div className="the-timeline">
        <div>
          <img onClick={() => changeSlide(aboutParagraphs.find(slide => slide.id === 1))} src={require("../assets/ufo.svg")} />
          <span></span>
          <img onClick={() => changeSlide(aboutParagraphs.find(slide => slide.id === 2))} src={require("../assets/ufo.svg")} />
          <span></span>
          <img onClick={() => changeSlide(aboutParagraphs.find(slide => slide.id === 3))} src={require("../assets/ufo.svg")} />
        </div>
      </div>
    </section>
  );
}

export default About;