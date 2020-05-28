import * as React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: undefined };
  }
  render() {
    return (
      <TextInput 
        style={styles.textInput} />
        //style={[TEXT_STYLE.textInput, styles.textInput ]} 
        //secureTextEntry={true} 
        //onChangeText={(text) => this.setState({ password: text })} 
        //placeholderTextColor={COLORS.Default.darkGray} />
    );
  }
}

const styles = StyleSheet.create({
  textInput: { 
    fontFamily: 'Lato-Regular', 
    fontStyle: this.state.password ? 'normal' : 'italic', 
    backgroundColor: 'yellow',
  },
});
