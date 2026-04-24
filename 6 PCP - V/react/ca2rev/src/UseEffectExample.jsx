// useEffect() is a hook that allows you to perform side effects in function components.
// It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React class components, but unified into a single API.
// The useEffect hook takes two arguments:
//  a function that contains the side effect code,
// and an optional array of dependencies.
// uses of useEffect() include:
// 1. Fetching data from an API when the component mounts.
// 2. Setting up a subscription or event listener and cleaning it up when the component unmounts.
// 3. Updating the document title based on the component's state or props.
// 4. Performing animations or manipulating the DOM directly.
// 5. Running side effects in response to changes in state or props, such as validating form input or triggering a re-render.

import React, { useState, useEffect } from "react";

function UseEffectExample() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(Window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  function handleWindowSize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return (
    <>
      <p> window width: {width}</p>
      <p> window height: {height}</p>
    </>
  );
}

export default UseEffectExample;
