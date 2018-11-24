// NoteStore.js provides a MOBX noteStore for observables

import { observable, action } from "mobx";
import NotesApi from "../api/NotesApi";

export default class NoteStore {
  @observable noteList = [{ Id: "0", Prio: "0", Note: "Loading notes" }];

  callApi = NotesApi.getNotes()
    .then(() => {
      console.log("Api.js called"); // make a logfile out of it?
      this.noteList = notelist.data; // Fill the list with data from the APIcall
    })
    .catch(function(error) {
      console.error(error);
    });

  @action addNote() {
    this.noteList.push({ Id: "9", Prio: "9", Note: "static pushed note" });
    // need to hook this up to an API call
  }
}
