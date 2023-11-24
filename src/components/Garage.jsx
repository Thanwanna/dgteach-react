// No : 1;https://t.me/koloneypoen/46


import { useState } from "react"


const Car =(props)=> {
    return (
        <h1>I am {props.model} </h1>
    )
}


const MissedGoal =()=> {
    return (
        <h1>I missed the ball!</h1>
    )
}


const MakedGoal =()=> {
    return (
        <h1>I maked the ball!</h1>
    )
}

const Goal =(props)=> {
    return (<>
    <h1>Do you make the Goal ? </h1>
    {props.goal ? <MakedGoal /> : <MissedGoal />}
    </>
        
    )
}

/* InputTests */
// const InputTests = () => {

//     const [input,inputSetter] = useState({});

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         inputSetter(e.target.value)
//         console.log(input)
//     }

//     const handleChange =(e)=> {
//         let name = e.target.name;
//         let value = e.target.value;
//         inputSetter(input => ({...input,[name]:value}))
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                 Enter your name : 
//                 <input value={input.username || ''} name="username" onChange={handleChange}/>
//                 </label><br/><br/>

//                 <label>
//                 Enter your age : 
//                 <input value={input.age || ''} name="age" onChange={handleChange}/>
//                 </label> <br />
//                 <input type='submit'/ >
//             </form>

//         </div>
//     )
// };


// Option 

const Option =(props)=> {

    const [select,setSelection]=useState('Volvo');
    const [car,setCar]=useState([])

    return (
        <select value={select} onChange={(e)=> setSelection(e.target.value)}>
            {/* <option value='Ford'>Ford</option>
            <option value='Fiat'>Fiat</option>
            <option value='Volvo'>Volvo</option> */
            props.cars.map(car => <option key={car} value={car}>{car}</option>)
            }
        </select>
    )
}



const Garage = () => {

    const cars = ['A','B','C']

  return (

    <div>
        <h1>Garage</h1>
        {cars.length > 0 && cars.map(car=> <Car key={car} model={car}/>) }
        <Goal goal={true}/>
        <hr />
        {/* <InputTests /> <hr /> */}
        <Option cars={cars}/><hr />
    </div>
    
  )
}

export default Garage