import React from 'react';
import '../index.scss';

function NextArrow() {
  return (
    <div className="next-arrow">
      <h2>next</h2>
      <img src={require("../assets/arrow.svg")}/>
    </div>
  )
}

export default NextArrow;