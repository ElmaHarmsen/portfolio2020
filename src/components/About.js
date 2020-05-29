import React, { useState, useEffect } from 'react';
import '../About.scss';

function About() {

  const [currentSlide, changeSlide] = useState(0);

  const aboutParagraphs = [
    {
      title: "Hii.",
      paragraph: "I am a young Web Developer. I am on my way to find a company for my internship, planned in the upcoming semester.",
      imageR: require("../assets/me-right.jpg"),
      imageL: require("../assets/me-left.jpg")
    },
    {
      title: "01.09.2017",
      paragraph: "This is when I started the study program Communication & Multimedia Design at the Hanzehogeschool, in Groningen.",
      imageR: require("../assets/me-right.jpg"),
      imageL: require("../assets/me-left.jpg")
    },
    {
      title: "21.08.2019",
      paragraph: "Here, I joined the autumn semester Web Development at the Business Academy Aarhus, in Denmark.",
      imageR: require("../assets/Aarhus-Harbor.jpg"),
      imageL:  require("../assets/Windy-Beach.jpg")
    },
    {
      title: "12.02.2020",
      paragraph: "So far, I've spent my free time in 2020 by learning Vue & React, along with playing Old School Runescape, and visiting Prague.",
      imageR: require("../assets/me-right.jpg"),
      imageL: require("../assets/Prague.jpg"),
    }
  ] //The paragraphs with stuff about me.

  const paragraphs = aboutParagraphs.map((item) =>
    <div className="slide" key={item.title}>
      <img className="lg-visible lg-figure-L" src={item.imageL} alt=""/>
      <div className="paragraph-text">
        <h2>{item.title}</h2>
        <p>{item.paragraph}</p>
      </div>
      <img className="lg-visible lg-figure-R" src={item.imageR} alt=""/>
    </div>
  )

  useEffect(() => {
    nextSlide();
  }, []); //Runs once

  function nextSlide() {
    const slides = document.querySelectorAll(".paragraphs-slides .slide"); 
    slides.forEach(slide => slide.classList.remove("skills-showing"));
    slides[currentSlide].classList.add("skills-showing");
    if (currentSlide < slides.length - 1) { 
      changeSlide(currentSlide +1);
    }
    else {
      changeSlide(0);
    }
  }

  return (
    <section className="About">
      <h1>who am i exactly<span>?</span></h1>
      <div className="the-about">
        <div className="the-images img-R">
          <img className="sm-figure sm-visible" src={require("../assets/2000x1800-About-SM.png")}/>
          <img className="md-visible" src={require("../assets/me-left.jpg")} alt=""/>
          <img className="md-visible" src={require("../assets/2000x1800-About-MD.png")}/>
          <img src={require("../assets/me-right.jpg")} alt=""/>
        </div>
        <div className="the-paragraphs">
          <div className="paragraphs-slides">
            {paragraphs} {/* .slide */}
          </div>
          <img className="arrow" onClick={nextSlide}  src={require("../assets/arrow-right.svg")}/>
        </div>
      </div>
    </section>
  );
}

export default About;