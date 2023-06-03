/*
function Array1() {
  const arr = [
    { name: "Sachin", age: 15 },
    { name: "Anur", age: 10 },
  ];

  return (
    <>
      <tr>
        <td>name</td>
        <td>age</td>
      </tr>
      {arr.map((item, key) => (
        <tr key={key}>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      ))}
    </>
  );
}
*/

//Importing table from rect-bootstrap...
import { Table } from "react-bootstrap";
function Array1() {
  const arr = [
    { name: "Sachin", rollNo: "22MCA", add: "Nashik" },
    { name: "Anurag", rollNo: "22RCA", add: "Nashiik" },
  ];
  return (
    <>
      {arr.map((item, index) => (
        <Table striped>
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.rollNo}</td>
            <td>{item.add}</td>
          </tr>
        </Table>
      ))}
    </>
  );
}
export default Array1;
