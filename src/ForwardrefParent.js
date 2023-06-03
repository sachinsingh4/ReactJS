//this is parent class of forwordRefChild using this class we will manipulate the DOM of..
//ForwardRefChlid Class

import React, { useRef } from "react"; //To manipulate dom in functional component we use useRef
import ForwardRefChild from "./ForwardRefChild";
export default function ForwardrefParent() {
  const inputRef = useRef(null);
  function update() {
    inputRef.current.value = 1000; //one way to manipulate dom.
    inputRef.current.style.color = "red";
  }
  return (
    <>
      <h1>parent child</h1>
      <ForwardRefChild ref={inputRef} />
      {/* ForwardRefChild */}
      <button onClick={update}>Update child Form</button>
    </>
  );
}
