import { useState } from 'react';
import NewItemForm from './newDrinkForm';

function NewItem() {
    // State for toggling drink / snack
    const [isDrink, setIsDrink] = useState(true)

    const handleClick = (e) =>{
        e.preventDefault()
        //sets isDrink to the opposite of its current state
        setIsDrink(!isDrink)
    }

    
  return (
  <>
    <button className='p-2 pl-5 pr-5' onClick={handleClick}>{isDrink?"Drink" : "Snack"}</button>


    <h1 className='m-5'>New {isDrink?"Drink" : "Snack" } Form</h1>
    {/* Renders form for snack or drink */}
    <NewItemForm isDrink={isDrink}/>
  </>
  );
}

export default NewItem;
