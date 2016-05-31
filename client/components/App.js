import React, { PropTypes, Component } from 'react';
import TextArea from './TextArea.js';
import prevButton from './prevButton.js';
import nextButton from './nextButton.js';
import Background from './background.js';

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
        <prevButton clickHandler={this.onClickPrev.bind(this)}/> 
        <nextButton clickHandler={this.onClickNext.bind(this)}/> 
      </div>
    );
  }
};

export default App;
