// import React from 'react'; //Basic React import
//import React, { useState, useEffect } from 'react'; //These 2 items in the { } are Hooks (generated by React) that are used in this file.
import React, { useState, useEffect } from 'react';
import '../Navigation.scss'; //Use .. for one level back. 
import '../index.scss';

//This is a functional components, not a class component.
function Navigation(props) { //Navigation is the name of the component. //Between () are the props that can be used within the HTML.

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(sectionChange, {
      threshold: [0.2, 0.4, 0.6, 0.8, 1]
    });
    document.querySelectorAll(".section").forEach(section => scrollObserver.observe(section));

    if (window.localStorage.getItem("darkTheme")) {
      //Checks if there is a value of the data property darkTheme available to use
      JSON.parse(window.localStorage.getItem("darkTheme")) ? setDarkTheme(true) : setDarkTheme(false);
      //The localStorage string gets parsed back here as its original type (boolean) & gets the boolean value of darkTheme data property
    }

    const localStorageResult = window.localStorage.getItem("languageSetting") ? window.localStorage.getItem("languageSetting") : null;
    localStorageResult ? setLanguage(localStorageResult) : setLanguage("nl");
  }, []);

  const [languageSetting, setLanguage] = useState(null);

  useEffect(() => {
    if (languageSetting) {
      window.localStorage.setItem("languageSetting", languageSetting);
    }
  }, [languageSetting]);

  const [darkTheme, setDarkTheme] = useState(false);
  //darkTheme is a data property & setDarkTheme changes this data value, by default this boolean is false

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? "dark" : "light");
    //Using the 'dark-theme' attribute in css, the data property darkTheme gets either dark or light ('light' is default)
    window.localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
    //In the localStorage we name 'darkTheme' with the value from the data property darkTheme, we make it into a string as this is how localstorage works
  }, [darkTheme]); //Runs when darkTheme changes

  //This is the place where the HOOKS will be located.
  const [navigationState, changeState] = useState({ //inside of object
    isNavigationOpen: false, //nav is closed by default
    sectionVisibilities: [ //structure of what you see in the navigstion and what is visible
      {
        name: "Hello",
        visitility: 0 //0
      },
      {
        name: "About",
        visitility: 0 //1
      },
      {
        name: "Projects",
        visitility: 0 //2
      },
      {
        name: "Contact", //Good to know is that these names don't have a function; what is visible in the screen is the id's on the home.js but they need to match to this id
        visitility: 0 //3
      }
    ],
    activeSection: null //the section who is most visible and whose name will be in the nav
  }); 
  //useState declares a state variable. Before it was this.state. Between ( ) can be anything: number, string, object, boolean (hopefuly).
  //useState returns 2 values: the current state 'banana' and an updated one 'setBanana'.

  function sectionChange(entries) { //entries is smth that has to do with intersection observer, when it calls the sectionChange method, it provides the changed entries
    const updatedSection = entries[0].target.id; //0 is the first one (Header), it gets the information from the id of the home.js elements
    const indexOfUpdatedSection = navigationState.sectionVisibilities.indexOf(navigationState.sectionVisibilities.find(section => section.name === updatedSection)); //gets the index of the items in sectionVisibilities
    //--> when the observer triggers, it sends the section that triggered it as the entries into this method
    let updatedState = navigationState.sectionVisibilities; //replace the state of the triggered section with the new visibility percentage --> happens at next line below
    updatedState.splice(indexOfUpdatedSection, 1, { //indexOfUpdatedSection is where in the array it points, 1 is how many elements it deletes, the {} in this case is what it inserts what will become the index
      name: updatedSection,
      visitility: entries[0].intersectionRatio
    });
    changeState({...navigationState, //(...), it takes the contents of the navigation state, which is the old state
      sectionVisibilities: updatedState // --> and this is where sectionVisibilities gets replaced with the new state that is generated in this function
    }); //this happens often
  }

  useEffect(() => { //This is where the text actually changes, so when smth on line 68 changes, this useEffect get fired
    const currentHighestValue = Math.max(...navigationState.sectionVisibilities.map(section => section.visitility)); //highest value of stuff in (), and from this it only takes the numbers
    const currentHighestVisibilitySection = navigationState.sectionVisibilities.find(section => section.visitility === currentHighestValue); //In the state it finds the section who has this highest value
    changeState({...navigationState, //from the navigationState we take name of the one that has the highest visibility, we save it into activeSection
      activeSection: currentHighestVisibilitySection.name //activeSection is the one that goes into the h2 at the top of the screen
    });
  }, [navigationState.sectionVisibilities[0], navigationState.sectionVisibilities[1], navigationState.sectionVisibilities[2], navigationState.sectionVisibilities[3], navigationState.sectionVisibilities[4]]); //Trigger 5 times for all 5 elements in the array

  function navigateToSection(id) {
    let sizeScreen = window.matchMedia('(min-width: 0px)');
    let position = 0;
    if (sizeScreen.matches) {
      position = navItems[id].position + 69; //No const in if-else.
    }
    else {
      position = navItems[id].position;
    }
    changeState({...navigationState, isNavigationOpen: false})
    if (position !== null) { //null is a falsey value, so if the position is not null.
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    {
      name: "Hello",
      position: props.sectionPositions[0]
    },
    {
      name: "Projects",
      position: props.sectionPositions[1]
    },
    {
      name: "About",
      position: props.sectionPositions[2]
    },
    {
      name: "Contact",
      position: props.sectionPositions[3]
    }
  ]//This generates 4 navitems which know to wich position to scroll to when you click it.
  //The [numbers] refer to the sections in order of the Homepage.
  //Contact does not have this because that's an overlay thingy.

  const theNavItems = navItems.map((item, index) => {
    return (
      <div key={item.name}>
        <a><h3 onClick={() => navigateToSection(index)}>{item.name}</h3></a>
      </div>
    )
  }); //This generates a header with the 4 navItems names. 

  //This is the HTML.
  return (
    <section>
      <div className="nav-menu-bar">
        <div className="nav-button" onClick={() => changeState({...navigationState, isNavigationOpen: !navigationState.isNavigationOpen})}>
          <div className={navigationState.isNavigationOpen ? "nav-menu close" : "nav-menu open"} >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={navigationState.isNavigationOpen ? "nav-items open" : "nav-items"}>
        {theNavItems}
      </div>

      <div className="switch-wrapper">
        <div className="theme-switch" onClick={() => setDarkTheme(!darkTheme)}>
          <span className={darkTheme ? "to-light" : "to-dark"}></span>
        </div>
        <div className="language-switch" onClick={() => setLanguage(languageSetting === "nl" ? "en" : "nl")}>
          <h1>{languageSetting}</h1>
        </div>
      </div>
    </section>
  );
}

export default Navigation;