import React, { useState } from 'react';
import '../Projects.scss';

function Projects() {

  const [currentProject, changeProject] = useState("noproject");

  const projects = [
    {
      title: "Lego Universe Website",
      stack: "2020 | HTML, SCSS, JavaScript, Vue, Vuex, ExpressJs Api, MongoDB",
      link: "https://lego-universe.netlify.app/",
      image: "legostore"
    },
    {
      title: "Formidable Music Store",
      stack: "2020 | HTML, SCSS, JavaScript, Vue, Spotify Api",
      link: "https://formidablemusicstore.netlify.app/",
      image: "formidable"
    },
    {
      title: "Super Mario Minigame",
      stack: "2018 | HTML, CSS, Vanilla JavaScript",
      link: "https://mario-minigame.netlify.app/",
      image: "mario"
    },
    {
      title: "Ducky Dictionary web app",
      stack: "2020 | HTML, SCSS, JavaScript, Vue, Vuex, Fetch Api, MongoDB",
      link: "https://duckydictionary.netlify.app/",
      image: "ducky"
    },
    {
      title: "FEUM Event > Snake Game",
      stack: "2020 | Limited cooperative project, HTML, CSS, Vanilla JavaScript, Phaser.io",
      link: "https://feum-game.netlify.app/",
      image: "snake"
    },
  ]

  const portfolioProjects = projects.map((item) =>
    <div className="project" key={item.title}> {/* the key is only 1 unique thing inside the const, not all of them */}
      <a href={item.link} target="blank" onMouseEnter={() => changeProject(item.image)}><h2>{item.title}</h2></a>
      <p>{item.stack}</p>
    </div>
  )

  return (
    <section className="Projects">
      <h1><span>What </span> did I achieve as of yet?</h1>
      <div className="all-the-projects-lg">
        <div className="the-projects-images">
          <img src={require(`../assets/${currentProject}.png`)} alt=""/>
        </div>
        <div className="the-projects">
          <div>{portfolioProjects}</div>
        </div>
      </div>
    </section>
  );
}

export default Projects