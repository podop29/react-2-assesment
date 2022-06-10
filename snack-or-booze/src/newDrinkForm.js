import {useState} from 'react'
import SnackOrBoozeApi from './Api';
function NewItemForm({isDrink}) {
    //Initial empty object
    const INITIAL_STATE = {
        name: '',
        description: '',
        recipe: '',
        serve: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData(formData =>({
            ...formData,
            [name]:value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const id = createId(formData.name)
        //Creates a object for the drink / snack and then adds to database with snackOrBoozeApi class
        const item = {
            id,
            ...formData
        }
        if(isDrink){
            SnackOrBoozeApi.createDrink(item)
        }else{
            SnackOrBoozeApi.createSnack(item)
        }
        setFormData(INITIAL_STATE)

    }
    const createId = (name) =>{
        //Returns id as name with spaces replaced with dashes
        return name.replaceAll(' ', '-')
    }



  return (
      <>
      {isDrink?
      <form>
      <label htmlFor="name">Drink Name</label>
      <input
      id="name"
      type="text"
      name="name"
      placeholder="Drink Name"
      value={formData.name}
      onChange={handleChange}
      />
      <label htmlFor="description">Drink description</label>
      <input
      id="description"
      type="text"
      name="description"
      placeholder="Description"
      value={formData.description}
      onChange={handleChange}
      />
      <label htmlFor="recipe">Drink recipe</label>
      <input
      id="recipe"
      type="text"
      name="recipe"
      placeholder="Recipe"
      value={formData.recipe}
      onChange={handleChange}
      />
      <label htmlFor="serve">how is it served?</label>
      <input
      id="serve"
      type="text"
      name="serve"
      placeholder="serve"
      value={formData.serve}
      onChange={handleChange}
      />
      <button onClick={handleSubmit}>Create</button>
  </form>
       :

       <form>
      <label htmlFor="name">Snack Name</label>
      <input
      id="name"
      type="text"
      name="name"
      placeholder="Snack Name"
      value={formData.name}
      onChange={handleChange}
      />
      <label htmlFor="description">Snack description</label>
      <input
      id="description"
      type="text"
      name="description"
      placeholder="Description"
      value={formData.description}
      onChange={handleChange}
      />
      <label htmlFor="recipe">Snack recipe</label>
      <input
      id="recipe"
      type="text"
      name="recipe"
      placeholder="Recipe"
      value={formData.recipe}
      onChange={handleChange}
      />
      <label htmlFor="serve">how is it served?</label>
      <input
      id="serve"
      type="text"
      name="serve"
      placeholder="serve"
      value={formData.serve}
      onChange={handleChange}
      />
      <button onClick={handleSubmit}>Create</button>
  </form>
       }
   
   </>
  );
}

export default NewItemForm;
