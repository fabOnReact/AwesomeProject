import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

const Box = () => {
  return (
    <View style={{ width: 40, height: 440, borderWidth: 4, borderColor: 'green', backgroundColor: 'yellow'}}/>
  );
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.block, { transform: [{ rotate: '-10deg' }], borderRadius: 10, borderWidth: 5 }]}>
          <View style={[styles.textContainer, { borderRadius: 10, overflow: 'hidden' }]}>
            <Text>ROUD</Text>
            <Box/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  block: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    width: 200,
    height: 200,
    backgroundColor: 'gray',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'white',
    height: 100,
  },
});
