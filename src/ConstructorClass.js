//This is child class
import React, { Component } from "react";

class ConstructorClass extends Component {
  constructor(props) {
    super(props); //to call constructor of Component class
    this.state = {
      name: "Sachin",
      //data: this.props.data, //We can use props properties in the constructor class.
    };
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>Constructor class {this.props.data}</h1>
      </div>
    );
  }
}

export default ConstructorClass;
