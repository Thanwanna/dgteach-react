import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const ReactUseRef = () => {
  const [name, setName] = useState("");

  const count = useRef(0);

  useEffect(() => {
    console.log("effect render");
  });

  console.log("component");

  return (
    <div>
      <h3>UseRef</h3>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>Count is {count.current}</p>
    </div>
  );
};

export default ReactUseRef;
