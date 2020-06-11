import * as React from 'react';
import { TextInput, View, TouchableOpacity, StatusBar, Text, StyleSheet } from 'react-native';
import {PermissionsAndroid} from 'react-native';

async function requestAllPermissions() {
  try {
    const granted = await PermissionsAndroid.requestMultiple(
    [PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.RECORD_AUDIO]
  );

  if (granted[PermissionsAndroid.PERMISSIONS.CAMERA] == PermissionsAndroid.RESULTS.GRANTED) {
    console.warn('You can use the camera');
  } else {
    console.warn('Camera permission denied');
  }

  } catch (err) {
    console.warn(err);
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    requestAllPermissions();
  }

  state = {
    statusBarVisible: true,
  }

  onPress = () => {
    const { statusBarVisible } = this.state;
    StatusBar.setHidden(!statusBarVisible);
    this.setState({ statusBarVisible: !statusBarVisible })
  }
  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder=' Press to open kayboard'/>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Press to change statusbar visibility</Text>
        </TouchableOpacity>
        <View
          style={{marginTop:300}}>
          <Text>My Test</Text>
          <Text>My Test</Text>
          <Text>My Test</Text>
          <Text>My Test</Text>
          <Text>My Test</Text>
          <Text>My Test</Text>
          <Text>My Test</Text>
          <Text>My Test</Text>
          <Text>My Test</Text>
          <Text>My Test</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'red'
  },
  
  textInput: {
    width: '80%',
    height: 26,
    marginTop: 50,
    alignSelf: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  },
  
  button: {
    width: '80%',
    height: 50,
    marginTop: 50,
    alignSelf: 'center',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    
    alignItems: 'center',
    justifyContent: 'center',
  }
});
