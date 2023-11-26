import { useState } from "react";
import axios from "axios";
const Count = () => {
  let [count, setCount] = useState();
  axios
    .get("http://localhost:3000/users")
    .then((resp) => {
      //   console.log(resp.data);
      setCount(resp.data.length);
    })
    .catch(() => {
      console.log("error");
    });
  return (
    <div>
      <h1>{count}</h1>
      <h2 style={{ textAlign: "center" }}>No Of Application</h2>
    </div>
  );
};
export default Count;
