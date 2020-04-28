import React from 'react';
import '../Navigation.scss'; //Use .. for one level back. 
import '../index.scss';
import DoubleBorder from './DoubleBorder';

//This is a functional components, not a class component.
function Navigation() { //Navigation is the name of the component. //Between () are the props that can be used within the HTML.
  return (
    <section>
      <div className="nav-menu-bar">
        <div className="nav-content">
          <h2>home sweet home</h2>
          <div className="nav-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <DoubleBorder />
      </div>
      {/* <div className="nav-items">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Skills</h1>
        <h1>Projects</h1>
        <h1>Contact</h1>
      </div> */}
          
    </section>
  );
}

export default Navigation;