import React, { PropTypes, Component } from 'react';
import TextArea from './TextArea.js';
import Button from './button.js';
import PrevButton from './prevButton.js';
import NextButton from './nextButton.js';
import Background from './background.js';
import leftPage from './leftPage.js';
import rightPage from './rightPage.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: 'hello'
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
        <TextArea msg={this.state.msg}/>
        <leftPage />
        <rightPage />
        <PrevButton clickHandler={this.onClickPrev.bind(this)}/>
        <NextButton clickHandler={this.onClickNext.bind(this)}/>
      </div>
    );
  }
};

export default App;
