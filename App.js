import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={{
        // if `borderRadius` > 0 and `height` is large enough like 3000 (2000 is ok on my android device), `backgroundColor` will disappear.
        borderRadius: 1,
        height: 3000,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>Test</Text>
      </View>
    </ScrollView>
  );
}
