import React, { useState, useEffect } from 'react';
import '../About.scss';
import NextArrow from '../components/NextArrow.js';

function About() {

  const [currentSlide, changeSlide] = useState(0); 

  const aboutParagraphs = [
    {
      title: "01.09.2017",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
      paragraph: "This is when I started the study program Communication & Multimedia Design at the Hanzehogeschool, in Groningen."
    },
    {
      title: "21.08.2019",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAADDCAMAAABeUu/HAAAALVBMVEXGDDD////EACLfkZrFACbYdIDotLrDABzDABXWbnznsbfBAAPejpjy1NfdjJX1293UAAABYklEQVR4nO3ay01DQRREwdM2mD/5hwsJ4I0fEhZ1EuhRbe/U4T087ucuT8cP/r0QIEAQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQh6A4JTof3/HKF4PXt+MEb63x475crBB+fxw/eWFee+09CgADBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEHznpnh2WT79wrn+7v4XHB8CBAhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAE3R/BF+GGRIscpa+NAAAAAElFTkSuQmCC",
      paragraph: "Here, I joined the autumn semester Web Development at the Business Academy Aarhus, in Denmark."
    },
    {
      title: "12.02.2020",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAADDCAMAAABeUu/HAAAALVBMVEXGDDD////EACLfkZrFACbYdIDotLrDABzDABXWbnznsbfBAAPejpjy1NfdjJX1293UAAABYklEQVR4nO3ay01DQRREwdM2mD/5hwsJ4I0fEhZ1EuhRbe/U4T087ucuT8cP/r0QIEAQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQh6A4JTof3/HKF4PXt+MEb63x475crBB+fxw/eWFee+09CgADBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEAzBEHznpnh2WT79wrn+7v4XHB8CBAhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAE3R/BF+GGRIscpa+NAAAAAElFTkSuQmCC",
      paragraph: "So far, I've spent my free time in 2020 wisely by learning Vue & React, along with playing Old School Runescape and Exploding Kittens."
    }
  ] //The three paragraphs with stuff about me.

  const paragraphs = aboutParagraphs.map((item) =>
    <div className="slide" key={item.title, item.img, item.paragraph}>
      <img className="tiny-paragraph-image" src={item.img}/>
      <h2>{item.title}</h2>
      <p>{item.paragraph}</p>
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
        <div className="the-images">
          <img src={require("../assets/me-right.jpg")}/>
          <span></span>
          <img src={require("../assets/me-left.jpg")}/>
        </div>
        <div className="the-paragraphs">
          <div className="paragraphs-slides">
            {paragraphs}
          </div>
          <img className="arrow" onClick={nextSlide}  src={require("../assets/arrow-right.svg")}/>
        </div>
      </div>
      <NextArrow />
    </section>
  );
}

export default About;