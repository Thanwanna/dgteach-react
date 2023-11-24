import { useContext, createContext, useState } from "react";

const UserContext = createContext();

const ReactUseContext = () => {
  const [name, setName] = useState("wanna");

  return (
    <UserContext.Provider value={name}>
      <div>ReactUseContext</div>
      <Componet1 />
    </UserContext.Provider>
  );
};

const Componet1 = () => {
  return (
    <div>
      Component1
      <Componet2 />
    </div>
  );
};

const Componet2 = () => {
  return (
    <div>
      Component2
      <Componet3 />
    </div>
  );
};

const Componet3 = () => {
  return (
    <div>
      Component3
      <Componet4 />
    </div>
  );
};

const Componet4 = () => {
    const user = useContext(UserContext)
  console.log(user);

  return (
    <>
      <h1>Component4</h1>
      <p>here my name is {user}</p>
    </>
  );
};

export default ReactUseContext;
