import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const BACKSPACE = 'Backspace';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };
  }

  handleKeyPress = ({ nativeEvent: { key: keyValue } }) => {
    if (keyValue === BACKSPACE) return this.handleKeyPressed('++');
    return this.handleKeyPressed(keyValue);
  };

  handleKeyPressed = key => {
    this.setState({ label: `${this.state.label}${key}` });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Output of the onKeyPress event:
        </Text>
        <Text style={styles.paragraph}>
          {this.state.label}
        </Text>

        <Text style={styles.paragraph}>
          Numeric (dot, comma, backspace,... will work):{' '}
        </Text>
        <TextInput
          ref={input => {
            this.input = input;
          }}
          style={styles.input}
          onKeyPress={this.handleKeyPress}
          autoFocus
          keyboardType="numeric"
        />

        <Text style={styles.paragraph}>Default: </Text>
        <TextInput
          ref={input => {
            this.input = input;
          }}
          style={styles.input}
          onKeyPress={this.handleKeyPress}
          autoFocus
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 300,
    height: 56,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
