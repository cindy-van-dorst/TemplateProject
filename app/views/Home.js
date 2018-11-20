// Home.js the main view component

import React, { Component } from "react";
import * as css from "../styles/Base";
import { FlatList, Button, Text, View } from "react-native";
import { observer } from "mobx-react";
import { observable } from "mobx";
import NoteStore from "../stores/NoteStore";

@observer
export default class Home extends Component {
  noteStore = new NoteStore();
  @observable boxVisible = false;
  @observable value = 1;

  toggleBox = () => {
    this.noteStore.addNote(); // * ref push a on the array note for seeing if the state will update
  };

  render() {
    return (
      <View style={css.home.container}>
        <Button
          onPress={this.toggleBox}
          title="Press to add a note"
          color="#841584"
        />


        <FlatList
          data={this.noteStore.noteList.slice()} // the slice () is super important here!
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
