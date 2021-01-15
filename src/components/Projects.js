import React, { useState } from 'react';
import '../Projects.scss';

function Projects() {

  const [currentProject, changeProject] = useState({
    id: 1,
    title: "Internship Project",
    description: "07.09.20 - 15.01.21 During my internship at Appademic in Groningen I was in charge of the Infant Motor Profile project. A web app running on a cooperation between frontend and backend, api's, various frameworks and evaluation.",
    url: "https://test.infantmotorprofile.com/",
    link: "infantmotorprofile.com",
    stack1: "Vue",
    stack2: "Vuex",
    stack3: "JavaScript",
    stack4: "TailwindCSS"
  });

  const projects = [
    {
      id: 1,
      title: "Internship Project",
      description: "07.09.20 - 15.01.21 During my internship at Appademic in Groningen I was in charge of the Infant Motor Profile project. A web app running on a cooperation between frontend and backend, api's, various frameworks and evaluation.",
      url: "https://test.infantmotorprofile.com/",
      link: "infantmotorprofile.com",
      stack1: "Vue",
      stack2: "Vuex",
      stack3: "JavaScript",
      stack4: "TailwindCSS"
    },
    {
      id: 2,
      title: "Ducky Dictionary",
      description: "2020 Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
      url: "https://duckydictionary.netlify.app/login",
      link: "duckydictionary.app",
      stack1: "Vue",
      stack2: "Vuex",
      stack3: "JavaScript",
      stack4: "SCSS"
    },
    {
      id: 3,
      title: "Snake Game",
      description: "2020 Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
      url: "https://feum-game.netlify.app/",
      link: "feumgame.app",
      stack1: "HTML",
      stack2: "CSS",
      stack3: "JavaScript",
      stack4: "Phaser.io"
    }
  ]

  // const portfolioProjects = projects.map((item) =>
  //   <div className="project" key={item.title}> {/* the key is only 1 unique thing inside the const, not all of them */}
  //     <a href={item.link} target="blank"><h1>{item.title}</h1></a>
  //     <div className="projects-about">
  //       <h2>{item.description}</h2>
  //     </div>
  //     <div className="projects-technologies">
  //       <h2>{item.stack1}</h2>
  //       <h2>{item.stack2}</h2>
  //       <h2>{item.stack3}</h2>
  //       <h2>{item.stack4}</h2>
  //     </div>
  //   </div>
  // )

  return (
    <section className="Projects">
      <div className="project"> {/* the key is only 1 unique thing inside the const, not all of them */}
        <h1>{currentProject.title}</h1>
        <div className="projects-about">
          <h2><a href={currentProject.url} target="blank">{currentProject.link}</a></h2>
          <h2>{currentProject.description}</h2>
        </div>
        <div className="projects-technologies">
          <h2>{currentProject.stack1}</h2>
          <h2>{currentProject.stack2}</h2>
          <h2>{currentProject.stack3}</h2>
          <h2>{currentProject.stack4}</h2>
        </div>
      </div>
      <ul className="projects-list">
        <li onClick={() => changeProject(projects.find(project => project.id === 1))}>Internship Project</li>
        <li onClick={() => changeProject(projects.find(project => project.id === 2))}>Ducky Dictionary</li>
        <li onClick={() => changeProject(projects.find(project => project.id === 3))}>FEUM Snake Game</li>
      </ul>
    </section>
  );
}

export default Projects