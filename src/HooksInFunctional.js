import React, { useState, useEffect } from "react";

function HooksInFunctional() {
  const [name, setName] = useState("Sachin");
  var count = 0;
  function uptodate() {
    if (name === "Sachin") setName("Anu");
    else setName("Sachin");
  }
  useEffect(() => {
    //this is useEffect method in functional component.
    console.log(count++);
  });
  return (
    <div>
      <h1>UseEffect{name}</h1>
      <button onClick={uptodate}>Update</button>
    </div>
  );
}

export default HooksInFunctional;
