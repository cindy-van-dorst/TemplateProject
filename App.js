// App.js creating the app

import React, { Component } from "react";
import { Provider } from "mobx-react";
import NoteStore from "./app/stores/NoteStore";
import Home from "./app/views/Home";

noteStore = new NoteStore();

export default class App extends Component {
  render() {
    return (
      <Provider noteStore={noteStore}>
        <Home />
      </Provider>
    );
  }
}
