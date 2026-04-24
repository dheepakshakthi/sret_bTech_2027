import react, { useState } from "react";

function UpdateObjects() {
  const [carObj, setCarObj] = useState({
    brand: "nexa",
    model: "baleno",
    year: 2023,
  });

  function onBrandChange(event) {
    setCarObj((prevCarObj) => ({ ...prevCarObj, brand: event.target.value }));
  }

  function onModelChange(event) {
    setCarObj((prevCarObj) => ({ ...prevCarObj, model: event.target.value }));
  }

  function onYearChange(event) {
    setCarObj((prevCarObj) => ({ ...prevCarObj, year: event.target.value }));
  }

  return (
    <div>
      <h2>
        this car is a {carObj.brand} {carObj.model} of the year {carObj.year}
      </h2>
      <input type="text" onChange={onBrandChange}></input>
      <input type="text" onChange={onModelChange}></input>
      <input type="number" onChange={onYearChange}></input>
    </div>
  );
}

export default UpdateObjects;
