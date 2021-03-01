import React, {useEffect, useState} from 'react';
import './Home.scss';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

function Home() {

  const [sectionPositions, setSectionPositions] = useState([]); //Empty array because it is YET unknown where the lines are.
  //Is for the position of the About, Skills, Projects sections so it is possible to scroll there, and I use the lines for that.
  useEffect(() => { //This useEffect is similar to the mounted hook in vue. With the empty array [] it runs only once, otherwise it would run everytime the component (Home.js) updates.
    setSectionPositions([])
    document.querySelectorAll(".section").forEach(section => setSectionPositions(previousStateVersion => [...previousStateVersion, window.pageYOffset + section.getBoundingClientRect().top - 69]));
    //Loops over the section-lines, and adds Y-Coördinates and "pushes" it in the sectionPositions array.
    //setSectionsPositions updates the state.
    //previousStateVersion is what it (the state) was before.
    //Returns the updated state.
    //... means it will not push a new array into the previous array, but only take the values of the previous array and combine it with the new value, outputs a single array.
    //window.pageYOffset means in counts in the amount of px the person already scrolled.
    //getBoundingClientRect is a JS thingy, it returns he size of an element and its position relative to the viewport.
    //.Y is the position on the y axes, because thats the only one that matters.
    const localStorageResult = window.localStorage.getItem("languageSetting") ?? "nl";
    setLanguage(localStorageResult);
  }, []); //End.

  const [languageSetting, setLanguage] = useState(null);

  useEffect(() => {
    if (languageSetting) {
      window.localStorage.setItem("languageSetting", languageSetting);
    }
  }, [languageSetting]);

  let sizeScreen = window.matchMedia('(min-width: 768px)');
  const stars = [];
  if (sizeScreen.matches) {
    for (let starId = 0; starId < 301; starId++) {
      stars.push({
        id: starId,
        positionX: Math.random() * window.innerWidth - 20,
        positionY: Math.random() * window.innerHeight - 20,
        size: starId % 2 === 0 ? "4px" : "2px",
      })
    }
  }
  else {
    for (let starId = 0; starId < 71; starId++) {
      stars.push({
        id: starId,
        positionX: Math.random() * window.innerWidth - 5,
        positionY: Math.random() * window.innerHeight - 5,
        size: starId % 2 === 0 ? "4px" : "2px",
      })
    }
  }

  return (
    <div className="App">
      <div className="section" id="Home"><Header languageSetting = {languageSetting} /></div>
      <Navigation sectionPositions = {sectionPositions} languageSetting = {languageSetting} onLanguageChange = {(value => setLanguage(value))} />
      <div className="section" id="Projects"><Projects languageSetting = {languageSetting} /></div>
      <div className="section" id="About"><About languageSetting = {languageSetting} /></div> 
      <div className="section" id="Contact"><Footer languageSetting = {languageSetting} /></div> 
      <div 
        className="star-container"
      >
        {stars.map(star => {
          return <span key={star.id} className="star" style={{top: star.positionY, left: star.positionX, width: star.size, height: star.size}}></span>
        })}
      </div>
    </div>
  );
}

export default Home;

//Navigation has special thanks to Vít Brykner.