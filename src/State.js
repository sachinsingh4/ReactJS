/*to use state first import useState from react...
import { useState } from "react";

//When we use useState than the component re-render that update the value of varible that..
//is not possible in simply variable so we use useState...
function State() {
  const [data, setData] = useState("Sachin"); // here data value is Sachin...
  function apple() {
    setData("Anurag");
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={apple}>Click for Update</button>
    </div>
  );
}

export default State;

*/

//=============================================================================================

//Props concept in functional component.....
import { useState } from "react";
function PropsComponent(props) {
  const [name, setName] = useState(props.name);
  function apple() {
    setName("Sachin");
  }
  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <h1>{name}</h1>
      <h2>{props.email}</h2>
      <h2>{props.other.mobile}</h2>
      <button onClick={apple}>Update</button>
    </div>
  );
}

export default PropsComponent;
