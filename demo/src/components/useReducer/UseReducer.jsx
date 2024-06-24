import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const UseReducer = () => {
  const [ch, chkUnchk] = useReducer((checked) => {
    return !checked ? true : false;
  }, false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <input type="checkbox" value={ch} onChange={chkUnchk} />
      {ch ? "Box Checked" : "Box Unchecked"}
      <br />
      <button onClick={handleBack}>Back</button>
    </>
  );
};
