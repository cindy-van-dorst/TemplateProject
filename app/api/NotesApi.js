// Api.js handle all calls to the API and returns the value to the stores
import { API_KEY, API_URL } from "react-native-dotenv";
import axios from "axios";

export default class NotesApi {
  static async getNotes() {
    try {
      axios.defaults.headers.common["x-api-key"] = API_KEY;
      notelist = await axios(API_URL);
      return notelist.data;
    } catch (e) {
      console.error(e); 
    }
  }
}
