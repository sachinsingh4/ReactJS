//This is child component and its parent component is Functional component Demo.
import React, { useEffect } from "react";
function UseEffecWithProps(props) {
  useEffect(() => {
    console.log("Updated");
  }, [props.data]); // this will update only for data value will change in funcitonalComponent.
  return (
    <div>
      <h1>Hello props useEffect{props.data}</h1>
    </div>
  );
}
export default UseEffecWithProps;
