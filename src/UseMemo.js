//useMemo is used in functional component. like pureComponent is used in Class component.
//useMemo is used to stop unwanted redering of function or component.

import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(1);
  /* this function is call again and again when we click on updatecount it also excuted so this is 
  error in this to recover this we use useMemo.
  function updateItem() {
    console.log("Hlo");
    return item + 2;
  }*/

  const useMem = useMemo(
    function updateItem() {
      console.log("Hlo");
      return item + 2;
    },
    [item]
  );
  return (
    <>
      <h1>count{count}</h1>
      <h1>Item{item}</h1>
      <h2>{useMem}</h2>
      <button onClick={() => setItem(item + 2)}>updateItem</button>
      <button onClick={() => setCount(count + 1)}>updateCount</button>
    </>
  );
}
export default UseMemo;
