import React, { Component } from "react";
import { ScrollView, TextInput, View, Text, StyleSheet } from "react-native";

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <TextInput
          onFocus={() => console.warn("onFocus")}
          style={{ 
            textAlign: 'right',
            backgroundColor: 'yellow',
          }} />
        <View style={{ height: 2000 }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});
