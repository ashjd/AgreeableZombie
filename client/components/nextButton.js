import React, { PropTypes, Component } from 'react';

var NextButton = (props) => (
  <div className="nextButton"> 
    <button onClick={props.clickHandler}>Next Page</button>
  </div>  
  );

export default NextButton;