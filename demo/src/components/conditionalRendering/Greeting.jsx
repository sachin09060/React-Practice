import React from "react";
import StatementIf from "./StatementIf";
import TernaryOp from "./TernaryOp";
import LogicalOP from "./LogicalOp";
import SwitchCase from "./SwitchCase";
import { useNavigate } from "react-router-dom";

function Greeting() {
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };

  return (
    <>
      <StatementIf isLoggedIn={true} />
      <TernaryOp isLoggedIn={true} />
      <LogicalOP isLoggedIn={true} />
      <SwitchCase isLoggedIn={false} />
      <br />
      <button onClick={back}>Back</button>
    </>
  );
}

export default Greeting;
