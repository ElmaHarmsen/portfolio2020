import React, {useEffect, useState} from 'react';
import './Home.scss';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
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

  }, []); //End.

  function openContact() {
    console.log("hehe:)");
  } //It is wise to restructure the states so that they are all here on the Home.js


  return (
    <div className="App">
      <Navigation openContact={() => openContact} sectionPositions = {sectionPositions} /> {/* Top bar with current page tekst and nav menu. About 200px*/}
      {/* navigateToSection is a prop, which when called from Navigation, returns a name, and calls a method. */}
      <div className="section-line line-header"></div>
      <div className="section"><Header /></div> {/* First page after animation */}
      <div className="section-line line-about"></div>
      <div className="section"><About /></div> {/* About me page with the sliding paragraphs and an image. */} 
      <div className="section-line line-skills"></div>
      <div className="section"><Skills /></div> {/* Skills page with 3 items and these are switching content. */}
      <div className="section-line line-projects"></div>
      <div className="section"><Projects /></div> {/* Projects page with 5 projects and a changing image, with the stack underneath the project link. */}
      <div className="line-footer"></div>
      <div className="section"><Footer /></div> {/* Small, like 15% height section with contact info, is a link that links to the contact component. About 150px */}
    </div>
  );
}

export default Home;

//Navigation has special thanks to Vít Brykner.

//STRUCTURE:
//Navigation, accessible from anywhere.
//Header.
//About component.
//Skills component.
//Projects component.
//Maybe some nice footer which displays some contact stuff.
//Contact component is always an overlay on the current component that's been visited.