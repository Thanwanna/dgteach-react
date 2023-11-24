import { useState } from "react";
import { createContext } from "react"
import { useContext } from "react"

const ReactUseContext2 = () => {
    
    const [fname,setName ] = useState('wanna')
    const Context = createContext();

  return (
    <>
    <Context.Provider value={fname} >
        <h1>Use Context Section</h1>
        <p>hello my name is {fname}</p>
        <GreetAung name={fname}/>
    </Context.Provider>
    </>
)

}

const GreetAung =()=> {

    const value = useContext(Context)

    return (
        <h1>hello my name is {value}</h1>
    )
}

export default ReactUseContext2