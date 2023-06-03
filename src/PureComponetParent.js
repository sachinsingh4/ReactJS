//This is pureComponentParent class.In this if we didn't update the state then render will
//not be render. After updating the state only page will render.

import react, { Component, PureComponent } from "react";
import PureComponentChild from "./PureComponentChild";
export default class PureComponentParent extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <>
        <PureComponentChild data={this.state.count} />
        <h1>Hello Parent class here</h1>
        <button
          onClick={() =>
            this.setState({
              count: 1,
            })
          }
        >
          Update
        </button>
      </>
    );
  }
}
