import * as React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <TextInput 
        backgroundColor="red"
        placeholder="testing text input" />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
  },
});
