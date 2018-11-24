// Home.js the main view component

import React, { Component } from "react";
import * as css from "../styles/Base";
import { FlatList, Button, Text, View } from "react-native";
import { inject, observer } from "mobx-react";

@inject(["noteStore"])
@observer
export default class Home extends Component {
  addNoteBtn = () => {
    this.props.noteStore.addNote(); // * ref push a on the array note for seeing if the state will update
  };

  render() {
    return (
      <View style={css.home.container}>
        <Button
          onPress={this.addNoteBtn}
          title="Press to add static note"
          color="#841584"
        />

        <FlatList
          data={this.props.noteStore.noteList
            .slice()
            .sort((a, b) => a.Prio.localeCompare(b.Prio))}
          renderItem={({ item }) => (
            <Text>
              {item.Prio} {item.Note}
            </Text>
          )}
          keyExtractor={({ Id }, index) => Id}
        />
      </View>
    );
  }
}
