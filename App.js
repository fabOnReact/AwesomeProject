import React, { useState } from "react";
import { Button, View, StyleSheet, TextInput } from 'react-native';

export default function App() {
  const [placeholder, setPlaceholder] = useState("default");
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 50,
    backgroundColor: "yellow",
    textAlign: "center",
    width: "100%",
  },
});
