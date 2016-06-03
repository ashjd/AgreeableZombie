import React, { PropTypes, Component } from 'react';

var LeftPageText = (props) => {
  var words = props.bookData[props.pageCounter].content.split(' ');
  console.log (words);
  return ( <div className="left-page-text"> 
  { words.map ((word) => 
     <span onMouseOver={props.onHover.bind(null, word)}> {word} </span>
    )};
  </div>)
}

export default LeftPageText;