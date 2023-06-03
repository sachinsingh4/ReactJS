import React, { Component } from "react";

export default class ComponentDidUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sachin",
    };
  }

  //IMP we can use only arrow function to setStates in class Component bcz setState is also a function.

  change = () => {
    this.setState({ name: "sac" });
  };

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log(prevState); //prevState return always previous status of your state...
  }
  render() {
    return (
      <div>
        {console.log("callRender")}
        <h1>Render</h1>
        <button onClick={this.change}>Update</button>
      </div>
    );
  }
}
