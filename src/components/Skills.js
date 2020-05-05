import React from 'react';
import NextArrow from '../components/NextArrow.js';
import '../Skills.scss';

function Skills() {

  const skills = [
    {
      one: "HTML",
      two: "JavaScript",
      three: "Vue"
    },
    {
      one: "SCSS",
      two: "JSON",
      three: "React"
    },
    {
      one: "Git",
      two: "Fetch Api",
      three: "SQL"
    }
  ]
  const skillsOne = skills.map((item) =>
    <h2 key={item.one}>{item.one} </h2>
  )
  const skillsTwo = skills.map((item) =>
    <h2 key={item.two}>{item.two} </h2>
  )
  const skillsThree = skills.map((item) =>
    <h2 key={item.three}>{item.three} </h2>
  )
  
  return (
    <section className="Skills">
      <h1>let me tell you what i can do<span>.</span></h1>
      <div className="the-skills">
        <div>
          {skillsOne}
        </div>
        <div className="skills-two">
          {skillsTwo}
        </div>
        <div>
          {skillsThree}
        </div>
      </div>
      <NextArrow />
    </section>
  );
}

export default Skills;