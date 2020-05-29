import React, { useState } from 'react';
import '../Projects.scss';

function Projects() {

  const [currentProject, changeProject] = useState("noproject");

  const projects = [
    {
      title: "Lego Universe Website",
      stack: "HTML, SCSS, JavaScript, Vue, MongoDB, ExpressJs Api, Vuex",
      link: "https://lego-universe.netlify.app/",
      image: "legostore"
    },
    {
      title: "Formidable Music Store",
      stack: "HTML, SCSS, JavaScript, Vue, Spotify Api",
      link: "https://formidablemusicstore.netlify.app/",
      image: "formidable"
    },
    {
      title: "Super Mario Minigame",
      stack: "HTML, CSS, Vanilla JavaScript",
      link: "https://mario-minigame.netlify.app/",
      image: "mariominigame"
    },
    {
      title: "Fantasy Movie Website",
      stack: "HTML, CSS, JavaScript, JSON, Fetch Api",
      link: "https://fantasy-movies-elma.netlify.app",
      image: "fantasymovies"
    },
    {
      title: "JavaScript Portfolio",
      stack: "HTML, CSS, Vanilla JavaScript",
      link: "https://elmaharmsen01.netlify.app/",
      image: "previousportfolio"
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
      <h1>what have i been up to<span>?</span></h1>
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