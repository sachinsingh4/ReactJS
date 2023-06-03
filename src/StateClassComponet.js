import React, { Component } from "react";

//create class component...
class Stateclass extends Component {
  //create constructor to use useState in class component...
  constructor() {
    super(); // this is JS method to call Component constuctor...
    this.state = {
      // if you are using this keyword then you must have to use super method.
      data: "sachin",
      rollno: "22MCA0194",
    };
  }
  apple() {
    alert(this.state.data);
    alert(this.state.rollno);
    this.setState({ rollno: "22MCA0195" }); //this is how we set the data in class componenet...
  }

  //If  you create state component than you should have to call render...
  render() {
    return (
      <div>
        <h1>{this.state.rollno}</h1>
        <button onClick={() => this.apple()}>Update Button</button>
      </div>
    );
  }
}
export default Stateclass;
