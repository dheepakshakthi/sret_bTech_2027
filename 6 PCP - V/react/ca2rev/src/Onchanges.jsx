import react, { useState } from "react";

function Onchanges() {
  const [name, setName] = useState("default Name");

  function onChangeEvent(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={onChangeEvent}></input>
      <p>Name: {name}</p>
    </div>
  );
}
export default Onchanges;
