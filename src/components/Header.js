import React, { useState, useEffect } from 'react';
import '../Header.scss';

function Header() {

  const [currentValue, changeValue] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  //darkTheme is a data property & setDarkTheme changes this data value, by default this boolean is false

  const values = [
    {
      value: "I stand for...",
      img: "2000x1800-Standing"
    },
    {
      value: "efficient web development",
      img: "2000x1800-WebDev"
    },
    {
      value: "a good bike trip",
      img: "2000x1800-Bike"
    },
    {
      value: "enjoying the work",
      img: "2000x1800-Enjoy"
    },
    {
      value: "good speakers for music",
      img: "2000x1800-Speaker"
    },
    {
      value: "learning new technologies",
      img: "2000x1800-Learning"
    },
    {
      value: "having plants",
      img: "2000x1800-Plants"
    }
  ]

  const portfolioValues = values.map((item) => 
    <div className="value" key={item.img}>
      <img className="value-figure" src={require(`../assets/${item.img}.png`)} alt=""/>
      <h2 className="value-text">{item.value}</h2>
    </div>
  )

  useEffect(() => {
    nextValue();
    if (window.localStorage.getItem("darkTheme")) {
      //Checks if there is a value of the data property darkTheme available to use
      JSON.parse(window.localStorage.getItem("darkTheme")) ? setDarkTheme(true) : setDarkTheme(false);
      //The localStorage string gets parsed back here as its original type (boolean) & gets the boolean value of darkTheme data property
    }
  }, []); //Runs once

  useEffect(() => {
    setTimeout(nextValue, 5000);
  }, [currentValue]); //Runs when currentValue changes

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? "dark" : "light");
    //Using the 'dark-theme' attribute in css, the data property darkTheme gets either dark or light ('light' is default)
    window.localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
    //In the localStorage we name 'darkTheme' with the value from the data property darkTheme, we make it into a string as this is how localstorage works
  }, [darkTheme]); //Runs when darkTheme changes


  function nextValue() {
    const values = document.querySelectorAll(".values-slides .value"); 
    values.forEach(value => value.classList.remove("values-showing")); 
    values[currentValue].classList.add("values-showing"); 
    if (currentValue < values.length - 1) { 
      changeValue(currentValue +1); 
    }
    else {
      changeValue(0)
    }
  }

  return (
    <section>
      <div className="Header">
        <div className="theme-switch" onClick={() => setDarkTheme(!darkTheme)}>
          <h2>To</h2><span className={darkTheme ? "to-light" : "to-dark"}></span>
          {/* <h2>{darkTheme ? "to light theme" : "to dark theme"}</h2> */}
        </div>
        <h1>Hello Hoi Hej Ahoj</h1>
        <h1>I am Elma</h1>
        {/* <h1 className="sm-visible">I am <br></br><span className="firstname">Elma</span><span className="lastname"> Harmsen</span></h1>
        <h1 className="md-visible">I am <span className="firstname">Elma</span><span className="lastname"> Harmsen</span></h1>
        <h1 className="lg-visible">I am <span className="firstname">Elma</span><span className="lastname"> Harmsen</span></h1> */}
        <div className="values-slides">
          {portfolioValues}
        </div>
        <div className="figure-eyes">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Header;