import React, { PropTypes, Component } from 'react';

var LeftPageText = (props) => {
  var words = props.bookData[props.pageCounter].content.split(' ');
  console.log (words);
  var highlighted = [];
  return (
  <div className="left-page-text"> 
    words.forEach(function(word) {
      console.log(word)
      <span onMouseOver={props.onHover.bind(null, word)}> {word} </span>
    });
  </div>  
  );
}

export default LeftPageText;