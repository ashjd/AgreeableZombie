import React, { PropTypes, Component } from 'react';

// var highlight = function (i, props) {
//   console.log('MouseOvered Word - ', props.)
// }

// var LeftPageText = (props) => {
//   var words = props.bookData[props.pageCounter].content.split(' ');
//   console.log (words);
//   return ( <div className="left-page-text"> 
//   { words.map ((word) => 
//       <span onMouseOver={}> {word} </span> 
//     )};
//   </div>)
// }

class LeftPageText extends React.Component {

  constructor (props) {
    super(props);

    this.words = props.bookData[props.pageCounter].content.split(' ');

    this.state = {

    }
  }
}

export default LeftPageText;