import { Table } from "react-bootstrap";

export default function NestedArray() {
  const arr = [
    {
      name: "Sachin",
      email: "sachin@",
      add: [
        { hno: 10, city: "nashil" },
        { hno: 11, city: "mumbai" },
      ],
    },
    {
      name: "anu",
      email: "anu@",
      add: [
        { hno: 12, city: "up" },
        { hno: 13, city: "Lucknow" },
      ],
    },
  ];
  return (
    <Table variant="black" striped border={5}>
      <tbody>
        <tr>
          <td>name</td>
          <td>email</td>
        </tr>
      </tbody>
      {arr.map((item, index) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.email}</td>
          {/* To handle add we need to use nested map means create a map here */}
          <td>
            {item.add.map((data) => (
              <tr>
                <td>{data.hno}</td>
                <td>{data.city}</td>
              </tr>
            ))}
          </td>
        </tr>
      ))}
    </Table>
  );
}
