import React, { useState, useEffect } from 'react';
import '../Header.scss';
import NextArrow from '../components/NextArrow.js';

function Header() {

  const [currentValue, changeValue] = useState(0); 


  const values = [
    {
      value: "efficient web development",
      img: "FigureStandingNew"
    },
    {
      value: "a good bike trip",
      img: "FigureBikeNew"
    },
    {
      value: "just having fun",
      img: "FigureStandingNew"
    },
    {
      value: "good speakers for music",
      img: "FigureSpeakerNew"
    },
    {
      value: "keeping the motivation",
      img: "FigureStandingNew"
    },
    {
      value: "having plants",
      img: "FigureStandingNew"
    }
  ]

  const portfolioValues = values.map((item) => 
    <div className="value">
      <img key={item.img} src={require(`../assets/${item.img}.png`)}/>
      <h2>{item.value}</h2>
    </div>
  )

  useEffect(() => {
    nextValue();
  }, []); //Runs once

  useEffect(() => {
    setTimeout(nextValue, 5000);
  }, [currentValue]); //Runs when currentValue changes


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
        <h1 className="hii">Hii<span>!</span></h1>
        <h1>My name is<br></br><span>Elma Harmsen</span><br></br>and I <span className="stand">stand</span> for</h1>
        <div className="values-slides">
          {portfolioValues}
        </div>
        {/* <img src={require("../assets/FigureStanding.png")}/>
        <div className="values-slides">{portfolioValues}</div> */}
        <NextArrow />
      </div>
    </section>
  )
}

export default Header;