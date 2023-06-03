import React, { useState } from "react";

export default function HideAndShow() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      {status ? <h1>hello</h1> : null}
      {/* <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button> */}

      <button onClick={() => setStatus(!status)}>toggle</button>
    </div>
  );
}
