import React, { Component } from "react";
import { User, User2 } from "./FunctionComponent";
class User4 extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.show ? <User /> : <User2 />}
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        ></button>
      </div>
    );
  }
}

export default User4;
