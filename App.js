import React, { Component } from 'react';
import { Button, TextInput, ScrollView, StyleSheet } from 'react-native';

export default class App extends Component {
  state = { text: null }
  setText = () => {
    this.setState({ text: "A really long string of text that extends far beyond the end of the TextInput" });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TextInput 
          value={this.state.text}
          placeholder="A really long string of text that extends far beyond the end of the TextInput"
          style={styles.input}
        />
        <Button 
          title="Set Text"
          onPress={this.setText} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  input: {
    height: 40,
    textAlign: "left",
  },
});
