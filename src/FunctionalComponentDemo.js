import UseEffecWithProps from "./UseEffectWithProps";
import React, { useState } from "react";
function FunctionalComponentDemo() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  return (
    <div>
      <h1>count:{count}</h1>
      <h1>data{data}</h1>
      <UseEffecWithProps data={data} count={count} />
      <button onClick={() => setCount(count + 1)}>updatecount</button>
      <button onClick={() => setData(data + 1)}>updatedata</button>
    </div>
  );
}
export default FunctionalComponentDemo;
