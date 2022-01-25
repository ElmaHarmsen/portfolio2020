import React, {useEffect, useState} from 'react';
import './Home.scss';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

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

    if (window.localStorage.getItem("darkTheme")) {
      //Checks if there is a value of the data property darkTheme available to use
      JSON.parse(window.localStorage.getItem("darkTheme")) ? setDarkTheme(true) : setDarkTheme(false);
      //The localStorage string gets parsed back here as its original type (boolean) & gets the boolean value of darkTheme data property
    }
  }, []); //End.

  const [languageSetting, setLanguage] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);
  //darkTheme is a data property & setDarkTheme changes this data value, by default this boolean is false

  useEffect(() => {
    if (languageSetting) {
      window.localStorage.setItem("languageSetting", languageSetting);
    }
  }, [languageSetting]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? "dark" : "light");
    //Using the 'dark-theme' attribute in css, the data property darkTheme gets either dark or light ('light' is default)
    window.localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
    //In the localStorage we name 'darkTheme' with the value from the data property darkTheme, we make it into a string as this is how localstorage works
  }, [darkTheme]); //Runs when darkTheme changes

  return (
    <div className="App">
      <div className="section" id="Home"><Header darkTheme = {darkTheme} /></div>
      <Navigation sectionPositions = {sectionPositions} languageSetting = {languageSetting} onLanguageChange = {(value => setLanguage(value))} darkTheme = {darkTheme} onThemeChange = {(value => setDarkTheme(value))} />
      <div className="section" id="Projects"><Projects languageSetting = {languageSetting} /></div>
      <div className="section" id="About"><About languageSetting = {languageSetting} /></div> 
      <div className="section" id="Contact"><Contact languageSetting = {languageSetting} /></div> 
    </div>
  );
}

export default Home;

//Navigation has special thanks to Vít Brykner.