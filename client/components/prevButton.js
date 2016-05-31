import React, { PropTypes, Component } from 'react';

var prevButton = (props) => (
  <div className="prevButton"> 
    <button onClick={props.clickHandler}> Previous </button>
  </div>  
  );

export default prevButton;

