import React, { useState } from 'react';
import '../Projects.scss';

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import dictionary from '../languages';
SwiperCore.use(Navigation);

function Projects(props) {
  const [currentProject, changeProject] = useState({
    id: 1,
    title: "projects_events_title",
    job: "Frontend & Backend",
    description: "projects_events",
    url: "https://randomevents.netlify.app/events",
    link: "randomevents.app",
    stack1: "VueJs framework",
    stack2: "NuxtJs framework",
    stack3: "JavaScript, TypeScript",
    stack4: "Strapi CMS",
    stack5: "MongoDB"
  });

  const projects = [
    {
      id: 1,
      title: "projects_events_title",
      job: "Frontend & Backend",
      description: "projects_events",
      url: "https://randomevents.netlify.app/events",
      link: "randomevents.app",
      stack1: "VueJs framework",
      stack2: "NuxtJs framework",
      stack3: "JavaScript, TypeScript",
      stack4: "Strapi CMS",
      stack5: "MongoDB"
      },
    {
      id: 2,
      title: "projects_game_title",
      job: "Frontend",
      description: "projects_game",
      url: "https://feum-game.netlify.app/",
      link: "snakegame.app",
      stack1: "HTML",
      stack2: "CSS",
      stack3: "JavaScript",
      stack4: "Phaser.io",
      stack5: ""
    },
    {
      id: 3,
      title: "projects_ducky_title",
      job: "Frontend, Backend & UI Design",
      description: "projects_ducky",
      url: "https://duckydictionary.netlify.app/",
      link: "duckydictionary.app",
      stack1: "VueJs framework",
      stack2: "Vuex state management",
      stack3: "JavaScript, SCSS",
      stack4: "ExpressJs",
      stack5: "MongoDB"
      }
  ]

  return (
    <section className="Projects">
      <div className="projects-list">
        <div>
          <div onClick={() => changeProject(projects.find(project => project.id === 1))}>
            <h2>{dictionary("projects_events_title", props.languageSetting)}</h2>
          </div>
          <span></span>
          <div onClick={() => changeProject(projects.find(project => project.id === 2))}>
            <h2>{dictionary("projects_game_title", props.languageSetting)}</h2>
          </div>
          <span></span>
          <div onClick={() => changeProject(projects.find(project => project.id === 3))}>
            <h2>{dictionary("projects_ducky_title", props.languageSetting)}</h2>
          </div>          
        </div>
      </div>
      <div className="project-lg"> {/* the key is only 1 unique thing inside the const, not all of them */}
        <h1 className="project-title">{dictionary(currentProject.title, props.languageSetting)}</h1>
        <h2 className="project-link"><a href={currentProject.url} target="blank">{currentProject.link}</a></h2>
        <div className="project-details">
          <div className="projects-about">
            <p className="style-bold">{dictionary("projects_stack", props.languageSetting)}</p>
            <h2>{currentProject.stack1}</h2>
            <h2>{currentProject.stack2}</h2>
            <h2>{currentProject.stack3}</h2>
            <h2>{currentProject.stack4}</h2>
            <h2>{currentProject.stack5}</h2>
          </div>
          <div>
            <p className="style-bold">{currentProject.job}</p>
            <p>{dictionary(currentProject.description, props.languageSetting)}</p>            
          </div>
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
              <h1>Random<br></br>Events</h1>
              <br></br>
              <h2 className="project-link"><a target="blank" href="https://randomevents.netlify.app/events">randomevents.app</a></h2>
              <ul>
                <li className="style-bold">{dictionary("projects_stack", props.languageSetting)}</li>
                <li>VueJs framework</li>
                <li>NuxtJs framework</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
              <div>
                <br></br>
                <p className="style-bold">Frontend & Backend</p>
                <p className="project-description">{dictionary("projects_events", props.languageSetting)}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <h1>Snake<br></br>Game</h1>
              <br></br>
              <h2 className="project-link"><a target="blank" href="https://feum-game.netlify.app/">snakegame.app</a></h2>
              <ul>
                <li className="style-bold">{dictionary("projects_stack", props.languageSetting)}</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Phaser.io</li>
              </ul>
              <div>
                <br></br>
                <p className="style-bold">Frontend</p>
                <p className="project-description">{dictionary("projects_game", props.languageSetting)}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <h1>Ducky<br></br>Dictionary</h1>
              <br></br>
              <h2 className="project-link"><a target="blank" href="https://duckydictionary.netlify.app/">duckydictionary.app</a></h2>
              <ul>
                <li className="style-bold">{dictionary("projects_stack", props.languageSetting)}</li>
                <li>VueJs framework</li>
                <li>Vuex state management</li>
                <li>JavaScript, SCSS</li>
                <li>ExpressJs</li>
              </ul>
              <div>
                <br></br>
                <p className="style-bold">Frontend, Backend & UI Design</p>
                <p className="project-description">{dictionary("projects_ducky", props.languageSetting)}</p>
              </div>
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