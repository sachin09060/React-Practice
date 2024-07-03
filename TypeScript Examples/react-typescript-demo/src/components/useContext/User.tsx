import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserUseContext = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "Sachin TP",
      email: "sachin@gmail.com",
    });
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div style={{textAlign:'center'}}>
      <h1>
        UserContext using useContext Hook with future value and Type Assertion!
      </h1>
      <div>User name is : {userContext?.user?.name} </div>
      <div>User email is : {userContext?.user?.email} </div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserUseContext;
