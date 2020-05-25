import React, { useState, useEffect } from 'react';
import '../Header.scss';

function Header() {

  const [currentValue, changeValue] = useState(0); 


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
  ]

  const portfolioValues = values.map((item) => 
    <div className="value" key={item.img}>
      <img className="value-figure" src={require(`../assets/${item.img}.png`)}/>
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
        <h1 className="sm-visible">My name is<br></br><span className="firstname">Elma</span><span className="lastname"> Harmsen</span><br></br>and I stand for<span>:</span></h1>
        <h1 className="md-visible">My name is <span className="firstname">Elma</span><span className="lastname"> Harmsen</span><br></br>and I stand for<span>:</span></h1>
        <h1 className="lg-visible">My name is <span className="firstname">Elma</span><span className="lastname"> Harmsen</span><br></br>and I stand for<span>:</span></h1>
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