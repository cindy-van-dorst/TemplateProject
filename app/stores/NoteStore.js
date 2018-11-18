 
import { observable, action} from 'mobx';
import NotesApi from "../api/NotesApi";
import { API_KEY, API_URL } from "react-native-dotenv";
import axios from "axios";



export default class NoteStore {
  notesApi = new NotesApi();
  @observable noteList = [ // fill the list with default value
    { Id: "0", Prio: "1", Note: "Drink gin" },
    { Id: "1", Prio: "2", Note: "Eat food via Store" }
  ];


  constructor() {
    this.noteList = this.notesApi.getNotes();  // fill the list with the API call  
  }

 @action getNoteList() {
    return this.noteList;
}

@action addNote() {
  this.noteList.push({ Id: "9", Prio: "9", Note: "pushed note" });
}

}

