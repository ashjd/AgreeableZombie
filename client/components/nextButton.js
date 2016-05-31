import React, { PropTypes, Component } from 'react';

var nextButton = (props) => (
  <div className="nextButton"> 
    <button onClick={props.clickHandler}> Next </button>
  </div>  
  );

export default nextButton;

