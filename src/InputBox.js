import { useState } from "react";

function InputBox() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    setData(val.target.value);
  }
  return (
    <div>
      {print ? <h1>Hello {data}</h1> : <h2>{data}</h2>}

      <input type="text" onChange={getData}></input>
      <button onClick={() => setPrint(true)}>AfterClick</button>
    </div>
  );
}
export default InputBox;
