import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filter, setFilter] = useState("All")

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoods = [...foods, newFood];
    setFoods(newFoods); 
  }

  function handleClick(id) {
    const newFoods = foods.map(food => {
      if (food.id === id) {
        return {...food, 
                heatLevel: food.heatLevel + 1, }
      } else {
        return food; 
      }
    })
    setFoods(newFoods); 
  }

  function handleChange(e) {
    setFilter(e.target.value)
  } 

  const foodList = foods.map((food) => {
    if (filter === "All" || food.cuisine === filter){
     return  (
      <li key={food.id}
          onClick={() => handleClick(food.id)}
          >
        {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      </li>)}
  });

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter"
              onChange={handleChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
