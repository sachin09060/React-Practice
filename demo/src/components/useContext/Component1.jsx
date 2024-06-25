import { createContext, useState } from "react";
import { Component2 } from "./Component2";

const UserContext = createContext();

const Component1 = () => {
  const [user, setUser] = useState("Sachin");

  const handleChange = () => setUser("Akash");

  return (
    <UserContext.Provider value={{user, handleChange}}>
      <h1>Componet 1</h1>
      <h1>{`\"User: ${user}\" Using inside Top most Component 1`}</h1>
      <Component2 />
      <br />
    </UserContext.Provider>
  );
};

export {UserContext, Component1};
