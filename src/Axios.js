import Axios from "axios";

export default function Axios1() {
  Axios.get("https://catfact.ninja/fact").then((data1) => {
    console.log(data1.data);
  });
}
