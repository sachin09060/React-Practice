import React, { useState } from "react";

type UserPropsType = {
  name?: string;
  email?: string;
};

const User2 = (props: UserPropsType) => {
  const [user, setUser] = useState<UserPropsType>({} as UserPropsType);
  const handleLogin = () => {
    setUser({
      name: "Sachin TP",
      email: "sachin@email.com",
    });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div>User name is : {user.name} </div>
      <div>User email is : {user.email} </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default User2;
