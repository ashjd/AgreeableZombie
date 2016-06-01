import React, { PropTypes, Component } from 'react';
import Book from './Book.js';
import Title from './Title.js';
import PrevButton from './PrevButton.js';
import NextButton from './NextButton.js';
import Background from './Background.js';
import LeftPageText from './LeftPageText.js';
import RightPageText from './RightPageText.js';
import LeftPageImage from './LeftPageImage.js';
import RightPageImage from './RightPageImage.js';
import Video1 from './Video1.js';
import Video2 from './Video2.js';
import Webcam from './Webcam.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: 'book'
    };

    socket.on('prev page', (data) => {
      console.log ('data from server', data);
      this.setState({msg: data.msg});
    });

    socket.on('next page', (data) => {
      this.setState({msg: data.msg});
    });
  }

  onClickPrev() {
    console.log('Previous Clicked');
    socket.emit('PrevButtonClick', {msg: 'Previous button clicked'});
  }

  onClickNext() {
    console.log('Next clicked');
    socket.emit('NextButtonClick', {msg: 'Next button clicked'});
  }

  changeText(event) {
    this.setState ({msg: event.msg});
  }
 
  render() {
    return (
      <div>
        <Background />
        <Title />
        <Book msg={this.state.msg}/>
        <LeftPageText />
        <RightPageText />
        <LeftPageImage />
        <RightPageImage />
        <PrevButton clickHandler={this.onClickPrev.bind(this)}/>
        <NextButton clickHandler={this.onClickNext.bind(this)}/>
        <Webcam />
        <Video1 />
        <Video2 />
      </div>
    );
  }
};

export default App;
