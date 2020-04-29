import React from 'react';
import NextArrow from '../components/NextArrow.js';
import '../Skills.scss';

function Skills() {
  return (
    <section className="Skills">
      <h1>let me tell you what i can do<span>.</span></h1>
      <div className="the-skills">
        <h2>HTML</h2>
        <h2>JavaScript</h2>
        <h2>Vue</h2>
      </div>
      <NextArrow />
    </section>
  );
}

export default Skills