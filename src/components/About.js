import React from 'react';
import '../About.scss';
import NextArrow from '../components/NextArrow.js';

function About() {
  return (
    <section className="About">
      <h1>who am i exactly<span>?</span></h1>
      <div className="the-about">
        {/* <div className="about-img">
          <div className="the-border"></div>
          <img src={require("../assets/me-right.jpg")}/>
        </div> */}
        <img src={require("../assets/me-right.jpg")}/>
        <img src={require("../assets/me-left.jpg")}/>
        <div className="paragraph-border">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      {/* <img className="arrow" src={require("../assets/rotated-arrow.svg")}/> */}
      <NextArrow />
    </section>
  );
}

export default About