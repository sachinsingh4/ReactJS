/*

//Class component structure...

import React, { Component } from "react";

class User3 extends Component {
  constructor() {
    super();
  }
  apple() {
    alert("hi");
  }
  render() { 
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.apple}>updated</button>
      </div>
    );
  }
}

export default User3;

*/

import React, { Component } from "react";

export default class ClassComponent extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "skyblue" }}>
        <h1>{this.props.name}</h1>
        <h1>{this.props.email}</h1>
        {/* this.props.name use to take proprties of parents class from there props are passed */}
      </div>
    );
  }
}
