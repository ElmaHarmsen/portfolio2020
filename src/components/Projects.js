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
    description: "07.09.20 - 15.01.21 | During my internship at Appademic I developed the frontend for the Infant Motor Profile app. This included transferring data with the use of a state management system, a database connection, and the finalization of my design with the help of various Usability tests. Though what I had developed stayed to be merely a temporarily concept.",
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
      description: "07.09.20 - 15.01.21 | During my internship at Appademic I developed the frontend for the Infant Motor Profile app. This included transferring data with the use of a state management system, a database connection, and the finalization of my design with the help of various Usability tests. Though what I had developed stayed to be merely a temporarily concept.",
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
      description: "01.09.2020 - 13.09.2020 | For the Danish organization FEUM I developed a minigame in addition to their ticketing selling platform. Complete with timer countdown, score counter, increasement of the player speed, including a fitting theme and music, it served well to its purpose and is easily reusable for future events.",
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
      description: "2020 - 2021 | For the purpose of learning VueJs I developed a dictionary platform. Though it is protected with a login functionality which is using ExpressJs api connected to a database in MongoDB. The website serves various functionalities, like adding, editing and removing words, searching for words and many more are on its way.",
      url: "https://duckydictionary.netlify.app/login",
      link: "duckydictionary.app",
      stack1: "VueJs framework",
      stack2: "Vuex state management",
      stack3: "JavaScript, SCSS",
      stack4: "ExpressJs"
      }
  ]

  return (
    <section className="Projects">
      <div className="projects-list">
        <div>
          <div onClick={() => changeProject(projects.find(project => project.id === 1))}>
            <h2>Internship Project</h2>
          </div>
          <span></span>
          <div onClick={() => changeProject(projects.find(project => project.id === 2))}>
            <h2>Snake Game</h2>
          </div>
          <span></span>
          <div onClick={() => changeProject(projects.find(project => project.id === 3))}>
            <h2>Ducky Dictionary</h2>
          </div>          
        </div>
      </div>
      <div className="project-lg"> {/* the key is only 1 unique thing inside the const, not all of them */}
        <h1 className="project-title">{currentProject.title}</h1>
        <div className="project-details">
          <div className="projects-about">
            <h2 className="project-link"><a href={currentProject.url} target="blank">{currentProject.link}</a></h2>
            <br></br>
            <h2>{currentProject.stack1}</h2>
            <h2>{currentProject.stack2}</h2>
            <h2>{currentProject.stack3}</h2>
            <h2>{currentProject.stack4}</h2>
          </div>
          <h2>{currentProject.description}</h2>
        </div>
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
              <h2 className="project-link"><a href="https://test.infantmotorprofile.com/">infantmotorprofile.com</a></h2>
              <ul>
                <li>VueJs framework</li>
                <li>Vuex state management</li>
                <li>JavaScript</li>
                <li>TailwindCSS framework</li>
              </ul>
              <h2 className="project-description">07.09.20 - 15.01.21 During my internship at Appademic I developed the frontend for the Infant Motor Profile app. This included transferring data with the use of a state management system, a database connection, and the finalization of my design with the help of various Usability tests. Though what I had developed stayed to be merely a concept.</h2>
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
              <h2 className="project-description">01.09.2020 - 13.09-2020 For the Danish organization FEUM I developed a minigame in addition to their ticketing selling platform. Complete with timer countdown, score counter, increasement of the player speed, including a fitting theme and music, it served well to its purpose and is easily reusable for future events.</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
            <h1>Ducky<br></br>Dictionary</h1>
              <h2 className="project-title"><a href="https://duckydictionary.netlify.app/login">duckydictionary.app</a></h2>
              <ul>
                <li>VueJs framework</li>
                <li>Vuex state management</li>
                <li>JavaScript, SCSS</li>
                <li>ExpressJs</li>
              </ul>
              <h2 className="project-description">2020 - 2021 For the purpose of learning VueJs I developed a dictionary platform. Though it is protected with a login functionality which is using ExpressJs api connected to a database in MongoDB. The website serves various functionalities, like adding, editing and removing words, searching for words and many more are on its way.</h2>
            </div>
          </SwiperSlide>
          <div className="swiper-navigation">
            <div className="swiper-prev"><svg height="50" viewBox="0 0 24 24" width="50"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/></svg></div>
            <div className="swiper-next"><svg height="50" viewBox="0 0 24 24" width="50"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M6.49 20.13l1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13z"/></svg></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default Projects