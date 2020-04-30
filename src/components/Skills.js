import React from 'react';
import NextArrow from '../components/NextArrow.js';
import '../Skills.scss';

function Skills() {

  const skills = [
    {
      one: "HTML",
      two: "SCSS",
      three: "Git"
    },
    {
      four: "JavaScript",
      five: "JSON",
      six: "Fetch Api"
    },
    {
      seven: "Vue",
      eight: "React",
      nine: "SQL"
    }
  ]
const skillsItemsFirst = skills.map((smth) => 
  <h2 key={smth.one, smth.two, smth.three}>
    {smth.one} {smth.two} {smth.three}
  </h2>
)
  
  return (
    <section className="Skills">
      <h1>let me tell you what i can do<span>.</span></h1>
      <div className="the-skills">
        <h2 className="skills-first">{skillsItemsFirst}</h2> {/* HTML & SCSS & Git */}
        <h2 className="skills-second">JavaScript</h2> {/* JavaScript & JSON & Fetch Api */}
        <h2 className="skills-third">Vue</h2> {/* Vue & React & SQL*/}
      </div>
      <NextArrow />
    </section>
  );
}

export default Skills