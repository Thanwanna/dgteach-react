import { useState } from "react";

const ReactUseReducer = () => {
  const [user, setUser] = useState({
    username: "",
    age: "",
  });

  const handleChange = (e) => {
    setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
    console.log(user.username);
  };

  const handleSubmit =(e)=> {
    e.preventDefault();
    
    
  }

  console.log("component");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ReactUseReducer</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" onChange={handleChange} />
          <input type="text" name="age" onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>

        <div>Username is {user.username}</div>
      </div>
    </div>
  );
};

export default ReactUseReducer;
