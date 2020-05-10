import React, { useState, useEffect } from 'react';
import NextArrow from '../components/NextArrow.js';
import '../Skills.scss';

function Skills() {

  const [currentSlide, changeSlide] = useState(0); 

  const skills = [
    {
      one: "HTML",
      two: "Git",
      three: "Vue"
    },
    {
      one: "SCSS",
      two: "JSON",
      three: "React"
    },
    {
      one: "JavaScript",
      two: "Api",
      three: "SQL"
    }
  ] //The three sections with the skills.

  const skillsOne = skills.map((item) =>
    <li className="slide" key={item.one}>{item.one} </li>
  )//HTML, SCSS, JavaScript
  const skillsTwo = skills.map((item) =>
    <li className="slide" key={item.two}>{item.two} </li>
  )//Git, JSON, Fetch Api
  const skillsThree = skills.map((item) =>
    <li className="slide" key={item.three}>{item.three} </li>
  )//Vue, React, SQL
  //These map each of the three sections into list items.

  useEffect(() => {
    nextSlide();
  }, []); //Runs once

  useEffect(() => {
    setTimeout(nextSlide, 2500);
  }, [currentSlide]); //This uses useEffect to set a timeout (interval) for how long the slides appear. 
  //Inbetween [] currentslide means ...


  function nextSlide() {
    const slides = document.querySelectorAll(".skills-slides .slide"); //The slides are defined by the class "slide" and the "skills-slides" around them.
    slides.forEach(slide => slide.classList.remove("skills-showing")); //For each slide element it removes the showing, so all of them dissappear.
    slides[currentSlide].classList.add("skills-showing"); //For the current visible slide it adds the showing class to it.    // currentSlide < slides.length ? changeSlide(previousState => previousState++) : changeSlide(2);
    if (currentSlide < slides.length - 1) { //If the current visible slide is les than 3 (the length),
      changeSlide(currentSlide +1); //it will change the current slide to the next one.
    }
    else {
      changeSlide(0) //Otherwise it will change it back to the first one.
    }
  }
  
  return (
    <section className="Skills">
      <h1>let me tell you what i can do<span>:</span></h1>
      <div className="the-skills">
        <div className="all-skills-stuff">
          <div className="skills-description">
            <p>The basic ones</p>
          </div>
          <ul className="skills-slides">
            {skillsOne}
          </ul>
        </div>
        <div className="all-skills-stuff">
          <div className="skills-description">
            <p>The usefull ones</p>
          </div>
          <ul className="skills-slides">
            {skillsTwo}
          </ul>
        </div>
        <div className="all-skills-stuff">
          <div className="skills-description">
            <p>The frameworks</p>
          </div>
          <ul className="skills-slides">
            {skillsThree}
          </ul>
        </div>
      </div>
      <NextArrow />
    </section>
  );
}

export default Skills;