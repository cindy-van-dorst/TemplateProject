import React, { Component } from "react";
import * as css from "../styles/Base";
import { FlatList, Button, Text, View } from "react-native";
import { observer } from "mobx-react";
import { observable } from "mobx";
import NoteStore from "../stores/NoteStore";

@observer
export default class Home extends Component {
  noteStore = new NoteStore();
  noteList = this.noteStore.noteList;
  @observable boxVisible = true;

  toggleBox = () => {
    this.boxVisible = !this.boxVisible;
    console.log("Notes are: " + JSON.stringify(this.noteList));
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

        {this.boxVisible && <View style={css.home.box} />}

        <FlatList
          data={this.noteList}
          renderItem={({ item }) => <Text>{item.Prio} {item.Note}</Text>}
          keyExtractor={({ Id }, index) => Id}
        />

      </View>
    );
  }
}
