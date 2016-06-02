import React, { PropTypes, Component } from 'react';

var LeftPageText = (props) => (
  <div className="left-page-text"> 
<<<<<<< HEAD
    <h2> Left Page Text </h2>
=======
    <p className="page-words">{props.bookData[props.pageCounter].content}</p>
>>>>>>> 35e7aec95ade54c521645cbe09d65f1d11542d58
  </div>  
  );

export default LeftPageText;