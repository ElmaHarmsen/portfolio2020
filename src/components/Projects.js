import React from 'react';
import '../Projects.scss';
import NextArrow from '../components/NextArrow.js';


function Projects() {

  const projects = [
    {
      title: "Formidable Music Store",
      stack: "HTML, SCSS, JavaScript, Vue, Spotify Api",
      link: "https://formidablemusicstore.netlify.app/",
      image: "formidable"
    },
    {
      title: "Lego Universe Website",
      stack: "HTML, SCSS, JavaScript, Vue, MongoDB, ExpressJs Api",
      link: "https://lego-universe.netlify.app/",
      image: "formidable"
    },
    {
      title: "Super Mario Minigame",
      stack: "HTML, CSS, Vanilla JavaScript",
      link: "https://formidablemusicstore.netlify.app/",
      image: "formidable"
    },
    {
      title: "Fantasy Movie Website",
      stack: "HTML, CSS, JavaScript, JSON, Fetch Api",
      link: "https://fantasy-movies-elma.netlify.app",
      image: "formidable"
    },
    {
      title: "JavaScript Portfolio",
      stack: "HTML, CSS, Vanilla JavaScript",
      link: "https://elmaharmsen.nl/",
      image: "formidable"
    },
  ]

  const portfolioProjects = projects.map((item) =>
    <div className="project" key={item.title, item.stack, item.link}>
      <a href={item.link} target="blank"><h2>{item.title}</h2></a>
      <p>{item.stack}</p>
    </div>
  )

  const portfolioProjectsImages = projects.map((item) =>
    <img key={item.image} src={require(`../assets/${item.image}.png`)}/>
  )

  return (
    <section className="Projects">
      <h1>what have i been up to<span>?</span></h1>
      <div className="all-the-projects-lg">
        <div className="the-projects-images">
          {portfolioProjectsImages}
        </div>
        <div className="the-projects">
          <div>{portfolioProjects}</div>
        </div>
      </div>
    </section>
  );
}

export default Projects