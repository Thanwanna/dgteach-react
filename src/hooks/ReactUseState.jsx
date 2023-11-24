import { useState, memo } from "react";
import CarSection from "../components/CarSection";

const ReactUseState = () => {
  const [state, setState] = useState("pink");

  //   const [brand, setBrand] = useState("Ford");
  //   const [model, setModel] = useState("Mustang");
  //   const [year, setYear] = useState("1964");
  //   const [color, setColor] = useState("red");
  // It is a red Mustang from 1964

  const changeColor = (e) => {
    console.log(e.target.innerText);
    setState((s) => e.target.innerText);
  };
  console.log("component render");

  
  return (
    <div>
      <h3>ReactUseState</h3>
      <p>My color is : {state}</p>
      <ol>
        <button onClick={changeColor}>Pink</button>
        <button onClick={changeColor}>Blue</button>
        <button onClick={changeColor}>Orange</button>
        <button onClick={changeColor}>Green</button>
      </ol>
      <CarSection />
    </div>
  );
};

export default ReactUseState;
