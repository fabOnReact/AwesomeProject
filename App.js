import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, PermissionsAndroid, Button } from "react-native";

const checkCameraPermission = async () => {
  try {
    const status = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.warn('status', status)
  } catch (err) {
    console.warn(err);
  }
};

const requestCameraPermission = async () => {
  try {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    console.warn('status', status)
  } catch (err) {
    console.warn(err);
  }
};

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>Try permissions</Text>
        <Button title="check camera" onPress={checkCameraPermission} />
        <Button title="request camera" onPress={requestCameraPermission} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default App;
