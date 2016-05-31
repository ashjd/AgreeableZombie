import React, { PropTypes, Component } from 'react';

var PrevButton = (props) => (
  <div className="prevButton"> 
    <button onClick={props.clickHandler}>Previous Page</button>
  </div>  
  );

export default PrevButton;