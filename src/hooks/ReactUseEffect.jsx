import { useEffect, useState } from "react";

const ReactUseEffect = () => {
  const [count, setCount] = useState(0);
  const [calculation,setCalculation] = useState(0)

console.log(count)

useEffect(()=> {
  const timer = setTimeout(()=> {
    setCalculation(()=> count * 2)
  },1000);
  return ()=> clearTimeout(timer)
},[count])

const countSetter = ()=>{setCount(c=>c + 1)
    // console.log(count)
  } 

  return (
    <>
      <div>ReactUseEffect</div>
      <div>
        <h3>Counter is : {count}</h3>
        <button onClick={countSetter}>+</button>
        <h3>Calculation : {calculation}</h3>
      </div>
    </>
  );
};

export default ReactUseEffect;
