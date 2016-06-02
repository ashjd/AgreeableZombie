import React, { PropTypes, Component } from 'react';

var RightPageImage = (props) => (
  <div className="right-page-image"> 
<<<<<<< HEAD
   <h2> Right Page Image </h2>
=======
    <img className="page-image" src={props.bookData[props.pageCounter+1].image} />
>>>>>>> 35e7aec95ade54c521645cbe09d65f1d11542d58
  </div>  
  );

export default RightPageImage;