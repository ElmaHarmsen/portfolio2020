import React, { useState, useEffect } from 'react';
import '../About.scss';

function About() {

  const [currentSlide, changeSlide] = useState(0);

  const aboutParagraphs = [
    {
      id: 1,
      description: "Netherlands Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
    },
    {
      id: 2,
      description: "Denmark Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
    },
    {
      id: 3,
      description: "Somewhere Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
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
      <h1>a Journey</h1>
      <div className="the-about">
        <h2>{currentSlide.description}</h2>
      </div>
      <div className="the-timeline">
        <img onClick={() => changeSlide(aboutParagraphs.find(slide => slide.id === 1))} src={require("../assets/ufo.svg")} />
        <img onClick={() => changeSlide(aboutParagraphs.find(slide => slide.id === 2))} src={require("../assets/ufo.svg")} />
        <img onClick={() => changeSlide(aboutParagraphs.find(slide => slide.id === 3))} src={require("../assets/ufo.svg")} />
      </div>
    </section>
  );
}

export default About;