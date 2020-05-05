import React from 'react';
import '../About.scss';
import NextArrow from '../components/NextArrow.js';

function About() {

  function slideForward() {
    const currentParagraphIndex = 0;
    const paragraphWidth = "300px";
    currentParagraphIndex++;
    if (currentParagraphIndex > 2) {
      currentParagraphIndex = 0;
    }
    document.querySelector(
      ".paragraphs-slider"
    ).style.transform = `translateX(-${paragraphWidth * currentParagraphIndex}px)`;
  }

  return (
    <section className="About">
      <h1>who am i exactly<span>?</span></h1>
      <div className="the-about">
        {/* <div className="about-img">
          <div className="the-border"></div>
          <img src={require("../assets/me-right.jpg")}/>
        </div> */}
        {/* <img src={require("../assets/me-right.jpg")}/>
        <img src={require("../assets/me-left.jpg")}/> */}
        {/* <div className="the-paragraphs">
          <div className="paragraphs-slider">
            <p className="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="about-paragraph">Smth</p>
            <p className="about-paragraph">And smth else</p>
          </div>
        </div> */}
      </div>
      <img className="arrow" src={require("../assets/rotated-arrow.svg")} onClick={() => slideForward()}/>
      <NextArrow />
    </section>
  );
}

export default About;