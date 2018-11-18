// api.js stores all calls to the API and returns the value to the stores

import { API_KEY, API_URL } from "react-native-dotenv";
import axios from "axios";


export default class NotesApi {

  noteList = [
    { Id: "0", Prio: "1", Note: "Drink gin" },
    { Id: "1", Prio: "2", Note: "Eat food via API" }
  ];


  getNotes() {
    axios.defaults.headers.common["x-api-key"] = API_KEY;
    axios
      .get(API_URL)
      .then(response => {
        console.log(response.data); // get this data to the store
      });

    return this.noteList;
  }


}
