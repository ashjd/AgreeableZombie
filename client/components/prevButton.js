import React, { PropTypes, Component } from 'react';

var PrevButton = (props) => (
  <div className="prev-button"> 
    <button onClick={props.clickHandler}>Prev</button>
  </div>  
  );

export default PrevButton;