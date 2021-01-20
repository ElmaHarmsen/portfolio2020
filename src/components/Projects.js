import React, { useState, useEffect } from 'react';
import '../Projects.scss';

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use(Navigation);

function Projects() {
  useEffect(() => {
    console.log("hi");
  }, []);
  const [currentProject, changeProject] = useState({
    id: 1,
    title: "Internship Project",
    description: "07.09.20 - 15.01.21 During my internship at Appademic in Groningen I was in charge of the Infant Motor Profile project. A web app running on a cooperation between frontend and backend, api's, various frameworks and evaluation.",
    url: "https://test.infantmotorprofile.com/",
    link: "infantmotorprofile.com",
    stack1: "VueJs framework",
    stack2: "Vuex state management",
    stack3: "JavaScript",
    stack4: "TailwindCSS framework"
  });

  const projects = [
    {
      id: 1,
      title: "Internship Project",
      description: "07.09.20 - 15.01.21 During my internship at Appademic in Groningen I was in charge of the Infant Motor Profile project. A web app running on a cooperation between frontend and backend, api's, various frameworks and evaluation.",
      url: "https://test.infantmotorprofile.com/",
      link: "infantmotorprofile.com",
      stack1: "VueJs framework",
      stack2: "Vuex state management",
      stack3: "JavaScript",
      stack4: "TailwindCSS framework"
      },
    {
      id: 2,
      title: "Snake Game",
      description: "2020 Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
      url: "https://feum-game.netlify.app/",
      link: "snakegame.app",
      stack1: "HTML",
      stack2: "CSS",
      stack3: "JavaScript",
      stack4: "Phaser.io"
    },
    {
      id: 3,
      title: "Ducky Dictionary",
      description: "2020 Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.",
      url: "https://duckydictionary.netlify.app/login",
      link: "duckydictionary.app",
      stack1: "VueJs framework",
      stack2: "Vuex state management",
      stack3: "JavaScript",
      stack4: "SCSS"
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
      <div className="project-lg"> {/* the key is only 1 unique thing inside the const, not all of them */}
        <h1 className="project-title">{currentProject.title}</h1>
        <div className="project-details">
          <div className="projects-about">
            <h2 className="project-link"><a href={currentProject.url} target="blank">{currentProject.link}</a></h2>
            <h2>{currentProject.stack1}</h2>
            <h2>{currentProject.stack2}</h2>
            <h2>{currentProject.stack3}</h2>
            <h2>{currentProject.stack4}</h2>
          </div>
          <h2>{currentProject.description}</h2>
        </div>
      </div>
      <div className="projects-list">
        <ul>
          <li onClick={() => changeProject(projects.find(project => project.id === 1))}>Internship Project</li>
          <span></span>
          <li onClick={() => changeProject(projects.find(project => project.id === 2))}>Snake Game</li>
          <span></span>
          <li onClick={() => changeProject(projects.find(project => project.id === 3))}>Ducky Dictionary</li>
        </ul>
      </div>
      <div className="project-sm">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={swiper => setTimeout(() => swiper.update())}
          className="swiper-container"
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev"
          }}
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <h1>Internship<br></br>Project</h1>
              <h2 className="project-title"><a href="https://test.infantmotorprofile.com/">infantmotorprofile.com</a></h2>
              <ul>
                <li>VueJs framework</li>
                <li>Vuex state management</li>
                <li>JavaScript</li>
                <li>TailwindCSS framework</li>
              </ul>
              <h2 className="project-description">07.09.20 - 15.01.21 During my internship at Appademic in Groningen I was in charge of the Infant Motor Profile project. A web app running on a cooperation between frontend and backend, api's, various frameworks and evaluation.</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
            <h1>Snake<br></br>Game</h1>
              <h2 className="project-title"><a href="https://feum-game.netlify.app/">snakegame.app</a></h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Phaser.io</li>
              </ul>
              <h2 className="project-description">07.09.20 - 15.01.21 During my internship at Appademic in Groningen I was in charge of the Infant Motor Profile project. A web app running on a cooperation between frontend and backend, api's, various frameworks and evaluation.</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
            <h1>Ducky<br></br>Dictionary</h1>
              <h2 className="project-title"><a href="https://duckydictionary.netlify.app/login">duckydictionary.app</a></h2>
              <ul>
                <li>VueJs framework</li>
                <li>Vuex state management</li>
                <li>JavaScript</li>
                <li>SCSS</li>
              </ul>
              <h2 className="project-description">07.09.20 - 15.01.21 During my internship at Appademic in Groningen I was in charge of the Infant Motor Profile project. A web app running on a cooperation between frontend and backend, api's, various frameworks and evaluation.</h2>
            </div>
          </SwiperSlide>
          <div className="swiper-navigation">
            <div className="swiper-prev"><img src={require("../assets/left-arrow.svg")} /></div>
            <div className="swiper-next"><img src={require("../assets/right-arrow.svg")} /></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Projects