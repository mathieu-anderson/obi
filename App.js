import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TestButton from './TestButton';

export default class App extends React.Component {
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
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is obi.</Text>
        <Text>Chat with people in you vinicinity.</Text>
        <Text>No account, no signup.</Text>
        <Text>{this.state.pressed}</Text>
        <Button
        title='test 2'
        onPress={this.handlePress} />
        </View>
      );
    }
  }
  // <TestButton
  //   pressed={this.state.pressed} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 10
  }
});
