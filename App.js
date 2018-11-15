import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import { observable } from "mobx";


@observer
export default class App extends Component {
  @observable boxVisible = true;

  toggleBox = () => {
    this.boxVisible = !this.boxVisible;
  };

  render() {
    return (
      <View style={styles.container}>

        <Button
          onPress={this.toggleBox}
          title="Press to show box"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        {this.boxVisible && <View style={styles.box} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  box: {
    margin: 10,
    height: 200,
    width: 200,
    backgroundColor: "red"
  }
});
