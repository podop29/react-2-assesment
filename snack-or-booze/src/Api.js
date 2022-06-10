import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }


  //Takes Drink object and adds it to dataBase, Else throws error
  static async createDrink(drink){
    try{
    const results = await axios.post(`${BASE_API_URL}/drinks`, drink)
    console.log(results.data)
    }
    catch(err){
      console.log(err)
    }
  }

  //Takes snack object and adds it to dataBase, Else throws error
  static async createSnack(snack){
    try{
    const results = await axios.post(`${BASE_API_URL}/snacks`, snack)
    console.log(results.data)
    }
    catch(err){
      console.log(err)
    }
  }


}

export default SnackOrBoozeApi;
