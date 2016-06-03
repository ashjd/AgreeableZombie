import React, { PropTypes, Component } from 'react';

var highlight = function (word) {
  console.log('MouseOvered Word - ', word);
};

var sendWord = function(word) {

};

var handleMouseOver = function(event) {
  var word = event.target.value;
  console.log('MouseOvered Word inside handleMouseOver - ', word);
  highlight (word);
  sendWord (word);
};

var LeftPageText = (props) => {
  var words = props.bookData[props.pageCounter].content.split(' ');
  console.log (words);
  return ( <div className="left-page-text"> 
  { words.map ((word) => 
      <span onMouseOver={handleMouseOver.bind(this)}> {word} </span> 
    )};
  </div>)
}

export default LeftPageText;