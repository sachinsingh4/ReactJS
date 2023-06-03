import ReuseChild from "./ReuseChild";
function ReuseComponentParent() {
  const arr = [
    {
      name: "Sachin",
      age: 30,
      add: [
        { city: "Nashik", Hno: 10 },
        { city: "Mumbai", Hno: 11 },
      ],
    },
    {
      name: "Anurag",
      age: 20,
      add: [
        { city: "Nashik", Hno: 10 },
        { city: "Mumbai", Hno: 11 },
      ],
    },
  ];
  return (
    <>
      {
        //From here we are passing arr values using props through map function and take it in
        //ReuseChild component pass props in it...
        arr.map((item) => (
          <ReuseChild data={item} />
        ))
      }
    </>
  );
}
export default ReuseComponentParent;
