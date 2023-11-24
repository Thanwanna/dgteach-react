// No : 4

import { useState } from "react";
import Todos from "../new/Todos";

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  const [todos,setTodos] = useState(["todo 1", "todo 2","todo 3"]);

  const increaseCount = () => {
    setCount((c) => c + 1);
    console.log("component rendered");
  };

  return (
    <>
      <Todos todos={todos} /> <hr />
      <div>
        Count : {count} <button onClick={increaseCount}>+</button>
      </div>
    </>
  );
};

export default ReactMemo;
