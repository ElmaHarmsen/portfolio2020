import React from 'react';
import './Home.scss';
import DoubleBorder from './components/DoubleBorder.js';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

function Home() { 
  return (
    <div className="App">
      <Navigation /> {/* Top bar with current page tekst and nav menu. About 200px*/}
      <Header /> {/* First page after animation */}
      <DoubleBorder /> {/* The DoubleBorder represents the 2 greens lines as a seperator between sections/components. */}
      <About /> {/* About me page with the sliding paragraphs and an image. */} 
      <Skills /> {/* Skills page with 3 items and these are switching content. */}
      <Projects /> {/* Projects page with 5 projects and a changing image, with the stack underneath the project link. */}
      <DoubleBorder /> {/* The DoubleBorder represents the 2 greens lines as a seperator between sections/components. */}
      <Footer /> {/* Small, like 15% height section with contact info, is a link that links to the contact component. About 150px */}
    </div>
  );
}

export default Home;

//STRUCTURE:
//Navigation, accessible from anywhere.
//Header.
//About component.
//Skills component.
//Projects component.
//Maybe some nice footer which displays some contact stuff.
//Contact component is always an overlay on the current component that's been visited.