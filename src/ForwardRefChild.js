//This is child classs of forwardParent class.It will take forward ref here and will updatethier dom.

import React, { forwardRef } from "react"; //to taking parent class ref here we use forwardRef

function ForwardRefChild(porps, ref) {
  return (
    <>
      <input type="text" placeholder="enter details" ref={ref}></input>
    </>
  );
}

export default forwardRef(ForwardRefChild);
