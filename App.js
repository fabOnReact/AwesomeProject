import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [pressedBox, setPressefBox] = React.useState('')
  return (
    <React.Fragment>
      <TouchableOpacity style={styles.box} onPress={() => setPressefBox('top')} />
      <View accessible={false}>
        <TouchableOpacity style={styles.boxBottom} onPress={() => setPressefBox('bottom')} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    borderWidth: 1,
  },
  boxBottom: {
    width: 120,
    height: 200,
    borderWidth: 1,
    marginTop: -75,
    elevation: 10,
  }
})
