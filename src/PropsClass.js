// this is the parent class of ClassComponents while using Props concept...
import ClassComponent from "./ClassComponent";
import { Component } from "react";
export default class PropsClass extends Component {
  constructor() {
    super(); //call the constructor of component class

    //creating useState in class Component...
    this.state = {
      name: "Sachin Singh",
      email: "sachin@gmail.com",
    };
  }
  render() {
    return (
      <div>
        <ClassComponent name={this.state.name} email={this.state.email} />
        {/* Passing props from propsclass component to classComponents class */}
        {/* We can change the value of variable dyanamic by using the parents class only */}

        <button
          onClick={() => {
            this.setState({ name: "Anurage", email: "anurag@gmail.com" });
          }}
        >
          update
        </button>
      </div>
    );
  }
}
