import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <View style={styles.textContainer}>
            <Text>SQUARE</Text>
            <Image
              source={require('./assets/logo_facebook_square.png')}
              style={styles.image}
            />
          </View>
          <View style={[styles.textContainer, { borderRadius: 10 }]}>
            <Text>ROUND</Text>
            <Image
              source={require('./assets/logo_facebook_square.png')}
              style={[styles.image, { borderRadius: 10 }]}
            />
          </View>
        </View>

        <View style={[styles.block, { transform: [{ rotate: '-10deg' }] }]}>
          <View style={styles.textContainer}>
            <Text>SQUARE</Text>
            <Image
              source={require('./assets/logo_facebook_square.png')}
              style={styles.image}
            />
          </View>
          <View style={[styles.textContainer, { borderRadius: 10 }]}>
            <Text>ROUND</Text>
            <Image
              source={require('./assets/logo_facebook_square.png')}
              style={[styles.image, { borderRadius: 10 }]}
            />
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
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
  image: {
    width: 40,
    height: 40,
    borderWidth: 4,
    borderColor: 'green',
  },
});
