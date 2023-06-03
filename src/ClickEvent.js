function ClickEvent() {
  let data = "Hello Sachin Here";
  function apple() {
    data = "sachin only"; //here We change the value of data but this only effect on the
    alert(data); // alert only
  }
  // We can call apple function from onClick by using function and normal which is
  //written below...
  return (
    <div>
      <h1>{data}</h1>{" "}
      {/*After changing the value of data doesn't make any effect here here the concept of state and props comes*/}
      <button onClick={apple}>Click Me</button>
    </div>
  );
}
export default ClickEvent;
