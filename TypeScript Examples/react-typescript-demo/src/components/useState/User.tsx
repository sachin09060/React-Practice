import React, { useState } from "react";

type UserPropsType = {
  name?: string;
  email?: string;
};

const User = (props: UserPropsType) => {
  const [user, setUser] = useState<UserPropsType | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Sachin TP",
      email: "sachin@email.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div>User name is : {user?.name} </div>
      <div>User email is : {user?.email} </div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;
