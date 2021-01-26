import React, { useState, useEffect } from 'react';
import '../Header.scss';

function Header() {

  const [currentValue, changeValue] = useState(0);
  const [currentGreet, changeGreet] = useState("");

  const values = [
    {
      value: "",
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
  ];

  const portfolioValues = values.map((item) => 
    <div className="value" key={item.img}>
      <img className="value-figure" src={require(`../assets/${item.img}.png`)} alt=""/>
      <h2 className="value-text">{item.value}</h2>
    </div>
  );

  let array = ["Hello", "Hoi", "Hej", "Ahoj"];
  useEffect(() => {
    changeGreet(array[Math.floor(Math.random() * array.length)]); //changeGreet() syntax
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
        <h1 className="header-greet">{currentGreet}, <br className="sm-only"></br> from Elma!</h1>
        <h2 className="header-subgreet">I stand for...</h2>
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