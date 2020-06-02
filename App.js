import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Text textTransform="uppercase">isdf</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 100,
    height: 100,
    width: 200,
    backgroundColor: 'yellow',
    borderLeftWidth: 2,
    borderStyle: 'dotted',
    borderTopLeftRadius: 1,
    borderTopEndRadius: 1,
    borderTopRightRadius: 1,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomEndRadius: 1,
    borderBottomLeftRadius: 1,
  },
});
