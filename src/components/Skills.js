import React, { useState, useEffect } from 'react';
import '../Skills.scss';

function Skills() {

  const [currentSlide, changeSlide] = useState(0); 

  const skills = [
    {
      title: "the basic ones",
      technologies: ["HTML", "(S)CSS", "JavaScript"]
    },
    {
      title: "the useful ones",
      technologies: ["Git", "JSON", "Api"]
    },
    {
      title: "the frameworks",
      technologies: ["Vue", "React", ":)"]
    }
  ] //The three sections with the skills.

  const skillsIteration = skills => skills.map((item) => //Here we make an iteration over the items in technologies inside skills
    <li className="slide" key={item}>{item}</li>
  );

  const skillsList = skills.map((technologySet) => {
    return ( //Here we define and return the html slider with the title and the technologies
      <div className="all-skills-stuff">
        <div className="skills-description">
        <p>{technologySet.title}</p>
        </div>
        <ul className="skills-slides">
          {skillsIteration(technologySet.technologies)} 
        </ul> {/* Here we call the iteration over the list of technologies*/}
      </div>
    )
  });

  useEffect(() => {
    nextSlide();
  }, []); //Runs once

  useEffect(() => {
    setTimeout(nextSlide, 3000);
  }, [currentSlide]); //This uses useEffect to set a timeout (interval) for how long the slides appear- Inbetween [] currentslide is in the state

  function nextSlide() {
    const sections = document.querySelectorAll(".skills-slides"); //The "skills-slides" around the "slide".
    sections.forEach(section => section.querySelectorAll(".slide").forEach(slide => slide.classList.remove("skills-showing"))); //We have a foreach in the skills array, and inside foreach object we have the technologies array that we loop over
    sections.forEach(section => section.querySelectorAll(".slide")[currentSlide].classList.add("skills-showing")); //For the current visible slide it adds the showing class to it.
    if (currentSlide < skills[0].technologies.length - 1) { //We see the length of the technologies inside the const skills. //If the current visible slide is les than 3 (the length),
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
        {skillsList}
      </div>
    </section>
  );
}

export default Skills;