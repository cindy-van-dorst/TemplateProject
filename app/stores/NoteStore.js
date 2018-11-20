
// NoteStore.js providing a MOBX noteStore for observables

import { observable, action} from 'mobx';
import NotesApi from "../api/NotesApi";


export default class NoteStore {
  notesApi = new NotesApi();
  @observable noteList = [ // fill the list with default value
    { Id: "0", Prio: "1", Note: "Default from store" }
  ];


  constructor() {
    this.noteList = this.notesApi.getNotes();  // fill the list with the API call  
  }

 @action getNoteList() {
    return this.noteList;
}

@action addNote() {
  this.noteList.push({ Id: "9", Prio: "9", Note: "static pushed note" });
}

}