import react, { useState } from "react";

function Counter() {
  const [num, setState] = useState(0);
  function increment() {
    setState(num + 1);
  }
  function decrement() {
    setState(num - 1);
  }
  function reset() {
    setState(0);
  }
  return (
    <div>
      <p>Number: {num}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
export default Counter;
