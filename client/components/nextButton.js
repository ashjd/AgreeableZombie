import React, { PropTypes, Component } from 'react';

var NextButton = (props) => (
  <div className="next-button"> 
    <button onClick={props.clickHandler}>Next</button>
  </div>  
  );

export default NextButton;