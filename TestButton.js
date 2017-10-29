import React, { Component } from 'react';
import { Button } from 'react-native';

class TestButton extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pressed: 'No button pressed'
    };
  }

  handlePress (state) {
    console.log('pressed');
    console.log(state);
    this.setState(previousState => {
      return { pressed: 'You pressed the button' };
    });
    console.log(this.state);
  }

  render () {
    return <Button title='test 1' onPress={this.handlePress} />;
  }
}

export default TestButton;
