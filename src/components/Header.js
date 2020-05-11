import React, { useState, useEffect } from 'react';
import '../Header.scss';
import NextArrow from '../components/NextArrow.js';

function Header() {

  const [currentValue, changeValue] = useState(0); 


  const values = [
    {
      value: "hi",
      img: "FigureStandingNewEyeless"
    },
    {
      value: "efficient web development",
      img: "FigureWebDevSmallerEyeless"
    },
    {
      value: "a good bike trip",
      img: "FigureBikeSmallerEyeless"
    },
    {
      value: "enjoying the work",
      img: "FigureStandingNewEyeless"
    },
    {
      value: "good speakers for music",
      img: "FigureSpeakerSmallerEyeless"
    },
    {
      value: "learning new technologies",
      img: "FigureLearningSmallerEyeless"
    },
    {
      value: "having plants",
      img: "FigurePlantsSmallerEyeless"
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
        <h1>My name is<br></br><span>Elma Harmsen</span><br></br>and I <span className="stand">stand</span> for</h1>
          <div className="values-slides">
            {portfolioValues}
          </div>
          <div className="figure-eyes">
            <span></span>
            <span></span>
          </div>
        <NextArrow />
      </div>
    </section>
  )
}

export default Header;