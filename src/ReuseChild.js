//This is child class. its parent class is ReuseComponentParent...
//Form ReuseComponentParent we will pass props through map and here we will print that...

/*
export default function ReuseChild(props) {
  return (
    <>
      <h1>{props.data.name}</h1>
    </>
  );
}

*/

import react, { Component } from "react";

export default class ReuseChild extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>{this.props.data.age}</h1>
      </>
    );
  }
}
