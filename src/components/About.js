import React, { useState, useEffect } from 'react';
import '../About.scss';

function About() {

  const [currentSlide, changeSlide] = useState(0);

  const aboutParagraphs = [
    {
      title: "This is me:",
      image: "https://elmaharmsen01.netlify.app/images/me-right.jpg",
      imageLG: "https://elmaharmsen01.netlify.app/images/me-left.jpg"
    },
    {
      title: "17.08.2000",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
      paragraph: "I first set foot on this world in the village of Haren, in summer of 2000. Soon I had great interest in reading, bikes, and the act of building from Lego."    
    },
    {
      title: "01.09.2017",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
      paragraph: "This is when I started the study program Communication & Multimedia Design at the Hanzehogeschool, in Groningen."    
    },
    {
      title: "21.08.2019",
      img: "https://cdn.webshopapp.com/shops/94414/files/52379582/flag-of-denmark.jpg",
      paragraph: "Here, I joined the autumn semester Web Development at the Business Academy Aarhus, in Denmark."    
    },
    {
      title: "12.02.2020",
      img: "https://cdn.webshopapp.com/shops/94414/files/52379582/flag-of-denmark.jpg",
      paragraph: "So far, I've spent my free time in 2020 wisely by learning Vue & React, along with playing Old School Runescape and Exploding Kittens."    
    }
  ] //The paragraphs with stuff about me.

  const paragraphs = aboutParagraphs.map((item) =>
    <div className="slide" key={item.title}>
      <img className="tiny-paragraph-image" src={item.img}/>
      <h2>{item.title}</h2>
      <p>{item.paragraph}</p>
      <img className="about-me-image" src={item.image}/>
      <img className="about-me-image md-visible"src={item.imageLG}/>
      <img className="about-me-image lg-visible"src={item.imageLG}/>
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
        {/* <div className="the-images">
          {images}
        </div> */}
        <div className="the-paragraphs">
          <div className="paragraphs-slides">
            {paragraphs}
          </div>
          <img className="arrow" onClick={nextSlide}  src={require("../assets/arrow-right.svg")}/>
        </div>
      </div>
    </section>
  );
}

export default About;