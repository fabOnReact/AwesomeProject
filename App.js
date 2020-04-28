import * as React from "react";
import { View, ScrollView, TextInput, Text, StyleSheet } from "react-native";

// These are the test parameters
const params = {
  underlineColors: ["red", undefined, "transparent", "rgba(0, 0, 0, 0)"],  // The colors to test
  numberOfInputs: 100, // How many TextInput to render at a time
  focusIntervalMs: 200, // How often to change focus between them
  displayForMs: 3000, // How long to display them (set to 0 for indefinite)
  delayDisplayForMs: 10, // How long to delay between displays
  withScrollView: false // Whether to use a ScrollView
};

const testText = index =>
  `Testing underlineColor = ${params.underlineColors[index] || "undefined"}`;

class AndroidTextInputTest extends React.Component{
  state = {
    underlineColorIndex: 0,
    showInputs: true,
    startKey: 0
  };
  mounted = false;
  focusInterval = undefined;
  textInputRefs = undefined;
  focussedInputIndex = 0;

  componentDidMount() {
    console.log(`Testing with params = `, JSON.stringify(params));
    this.mounted = true;
    setTimeout(this._showInputs, params.delayDisplayForMs);
    setInterval(this._focusAnInput, params.focusIntervalMs);
  }

  componentWillUnmount() {
    clearInterval(this.focusInterval);
    this.mounted = false;
  }

  _focusAnInput = () => {
    if (this.mounted && this.textInputRefs) {
      if (this.focussedInputIndex >= this.textInputRefs.length) {
        this.focussedInputIndex = 0;
      }
      const textInputRef = this.textInputRefs[this.focussedInputIndex];
      const textInput = this.refs[textInputRef];
      if (textInput) {
        this.focussedInputIndex++;
        this.refs[textInputRef].focus();
      }
    }
  };

  _showInputs = () => {
    if (this.mounted) {
      console.log(testText(this.state.underlineColorIndex));
      this.setState({ showInputs: true });
      if (params.displayForMs) {
        setTimeout(this._unshowInputs, params.displayForMs);
      }
    }
  };

  _unshowInputs = () => {
    this.focussedInputIndex = 0;
    this.textInputRefs = undefined;
    if (this.mounted) {
      let next = this.state.underlineColorIndex + 1;
      if (next === params.underlineColors.length) {
        next = 0;
      }
      this.setState({
        underlineColorIndex: next,
        showInputs: false,
        startKey: this.state.startKey + params.numberOfInputs
      });
      setTimeout(this._showInputs, params.delayDisplayForMs);
    }
  };

  render() {
    const textInputs = [];
    const { underlineColorIndex } = this.state;
    const underlineColor = params.underlineColors[underlineColorIndex];

    const refs = [];

    if (this.state.showInputs) {
      for (let i = 0; i < params.numberOfInputs; i++) {
        const key = this.state.startKey + i + "";
        refs.push(key);
        textInputs.push(
          <TextInput
            ref={key}
            key={key}
            placeholder={key}
            underlineColorAndroid={underlineColor}
            style={styles.textInput}
          />
        );
      }
      if (!this.textInputRefs) {
        this.textInputRefs = refs;
      }
    }

    return (
      <View style={styles.mainView}>
        <Text>{testText(underlineColorIndex)}</Text>
        {params.withScrollView ? (
          <React.Fragment>
            <Text>With ScrollView</Text>
            <ScrollView>{textInputs}</ScrollView>
          </React.Fragment>
        ) : (
          <React.Fragment>{textInputs}</React.Fragment>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center"
  },
  textInput: {
    backgroundColor: "white",
    margin: 5,
    width: 300
  }
});

export default AndroidTextInputTest;
