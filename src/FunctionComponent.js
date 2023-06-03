//This is function component which is used generally
import React, { Component } from "react";
const User = function () {
  //component inside a component...
  function componentWillUnmount() {
    alert("hi");
  }
  function inside() {
    return <div>inside component</div>;
  }
  return (
    <div>
      <h1>User function created</h1>
      {/* {inside()}    Returing a component or calling a component inside a component*/}
    </div>
  );
};

// We use default here because here only one file need to be export

//export default User;

const User2 = function () {
  return <h1>User2 is function created</h1>;
};

export { User, User2 };
