import React, { useState, useEffect } from 'react';
import dictionary from "../languages";
import '../Header.scss';

function Header(props) {

  const [currentValue, changeValue] = useState(0);
  const [currentGreet, changeGreet] = useState("");

  const values = [
    {
      value: "",
      img: "2000x1800-Standing"
    },
    {
      value: "header_figure_value_dev",
      img: "2000x1800-WebDev"
    },
    {
      value: "header_figure_value_bike",
      img: "2000x1800-Bike"
    },
    {
      value: "header_figure_value_work",
      img: "2000x1800-Enjoy"
    },
    {
      value: "header_figure_value_speakers",
      img: "2000x1800-Speaker"
    },
    {
      value: "header_figure_value_technologies",
      img: "2000x1800-Learning"
    },
    {
      value: "header_figure_value_plants",
      img: "2000x1800-Plants"
    }
  ];

  const portfolioValues = values.map((item) => 
    <div className="value" key={item.img}>
      <img className="value-figure" src={require(`../assets/${item.img}.png`)} alt=""/>
      <h2 className="value-text">{dictionary(item.value, props.languageSetting)}</h2>
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
        <h1 className="header-greet"><span className="current-greet">{currentGreet}</span> <br></br>{dictionary("header_greet", props.languageSetting)}!</h1>
        <div className="values-slides">
          <div className="figure-eyes">
            <span></span>
            <span></span>
          </div>
          {portfolioValues}
          <h2 className="header-subgreet">{dictionary("header_figure_text", props.languageSetting)}</h2>
        </div>
      </div>
    </section>
  )
}

export default Header;