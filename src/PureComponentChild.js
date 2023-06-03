//This is child componenet it will take props using parents and we will use pure Compoenent here.
//If we passing same properties than this component can't be render...

import React, { PureComponent } from "react";

export default class PureComponentChild extends PureComponent {
  render() {
    return (
      <>
        {console.log("Hi")}
        <h1>ChildClass{this.props.data}</h1>
      </>
    );
  }
}
