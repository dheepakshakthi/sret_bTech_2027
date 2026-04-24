import react, { useState } from "react";

function UpdateArrays() {
  const [foods, setFoods] = useState(["pizza", "burger", "pasta"]);

  function addFood() {
    const newFood = document.getElementById("addFoodInput").value;
    setFoods((prevFoods) => [...prevFoods, newFood]);
  }

  function removeFood(index) {
    setFoods((prevFoods) => prevFoods.filter((element, i) => i != index));
  }

  return (
    <div>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => removeFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input id="addFoodInput" type="text"></input>
      <button onClick={addFood}>add Food</button>
    </div>
  );
}

export default UpdateArrays;
