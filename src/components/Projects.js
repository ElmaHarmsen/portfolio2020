import React, { useState } from 'react';
import '../Projects.scss';

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import dictionary from '../languages';
SwiperCore.use(Navigation);

function Projects(props) {

  return (
    <section className='projects-container'>
      <section className="projects">
        <section className="section-top">
          <h1 className='animated-text-top'>Native app</h1>
        </section>
        <section className='section-bottom'>
          <div className='project-info'>
            <a className="project-link-container" href="https://drive.google.com/file/d/1h4TZikSRReqfUiiH51s2ZEodAqYV47Il/view?usp=sharing" target="blank">
              <div className="project-link">
                <img className='project-link-icon' src={require("../assets/play.png")} />
              </div>
              <h2>{dictionary("project_nativeapp_video", props.languageSetting)}</h2>
            </a>
            <h3>{dictionary("project_nativeapp_info", props.languageSetting)}</h3>
            <div className="project-technologies">
              <h3>{dictionary("project_nativeapp_technologies", props.languageSetting)}</h3>
            </div>
          </div>

          <div className="button-container">
            <div className="button-back-to-top" onClick={() => window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })}
            >next</div>
          </div>
        </section>
        <Swiper
          spaceBetween={5}
          loop={true}
          onSwiper={swiper => setTimeout(() => swiper.update())}
          className="swiper-container-native-app"
          navigation={{
            nextEl: ".swiper-next-native-app",
            prevEl: ".swiper-prev-native-app"
          }}
        >
          <SwiperSlide>
            <img className='project-image' src={require("../assets/projects/native-app-1.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='project-image' src={require("../assets/projects/native-app-2.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='project-image' src={require("../assets/projects/native-app-3.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='project-image' src={require("../assets/projects/native-app-4.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='project-image' src={require("../assets/projects/native-app-5.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='project-image' src={require("../assets/projects/native-app-6.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='project-image' src={require("../assets/projects/native-app-7.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='project-image' src={require("../assets/projects/native-app-8.jpg")} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-navigation-native-app">
          <div className="swiper-prev-native-app"><img className='swiper-icon' src={require("../assets/prev.png")} /></div>
          <div className="swiper-next-native-app"><img className='swiper-icon' src={require("../assets/next.png")} /></div>
        </div>
      </section>

      <section className="projects">
        <section className="section-top">
          <h1 className='animated-text-top'>{dictionary("header_project_dictionary", props.languageSetting)}</h1>
        </section>
        <section className='section-bottom'>
          <h2 className='animated-text-bottom'></h2>
          <div className='project-info'>
            <a className="project-link-container" href="https://duckydictionary.netlify.app/" target="blank">
              <div className="project-link">
                <img className='project-link-icon' src={require("../assets/cursor.png")} />
              </div>
              <h2>{dictionary("project_dictionary_link", props.languageSetting)}</h2>
            </a>
            <h3>{dictionary("project_dictionary_info", props.languageSetting)}</h3>
            <div className="project-technologies">
              <h3>{dictionary("project_dictionary_technologies", props.languageSetting)}</h3>
            </div>
          </div>
        </section>
        <Swiper
          spaceBetween={5}
          loop={true}
          onSwiper={swiper => setTimeout(() => swiper.update())}
          className="swiper-container-ducky"
          navigation={{
            nextEl: ".swiper-next-ducky",
            prevEl: ".swiper-prev-ducky"
          }}
        >
          <SwiperSlide>
            <img className='project-image' src={require("../assets/projects/ducky-1.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='project-image' src={require("../assets/projects/ducky-2.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='project-image' src={require("../assets/projects/ducky-3.jpg")} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='project-image' src={require("../assets/projects/ducky-4.jpg")} alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-navigation-ducky">
          <div className="swiper-prev-ducky"><img className='swiper-icon' src={require("../assets/prev.png")} /></div>
          <div className="swiper-next-ducky"><img className='swiper-icon' src={require("../assets/next.png")} /></div>
        </div>
      </section>
      {/* <div className="projects-list">
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
      <div className="project-lg"> 
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
      </div> */}
    </section>
  );
}

export default Projects