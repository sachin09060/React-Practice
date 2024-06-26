import { useId } from "react";
import { useNavigate } from "react-router-dom";

export const UseIdForm = () => {
  const idForFirstName = useId();
  const idForLastName = useId();
  const idForEmail = useId();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <h1>From "useId" Form Component!</h1>
      <label htmlFor={idForFirstName}>First Name</label>
      <input
        id={idForFirstName}
        type="text"
        placeholder={`Generated id --> ${idForFirstName}`}
      />
      <h1> The "idForFirstName" is {idForFirstName} </h1>

      <br />

      <label htmlFor={idForLastName}>Last Name</label>
      <input
        id={idForLastName}
        type="text"
        placeholder={`Generated id --> ${idForLastName}`}
      />
      <h1> The "idForLastName" is {idForLastName} </h1>

      <br />

      <label htmlFor={idForEmail}>Email</label>
      <input
        id={idForEmail}
        type="email"
        placeholder={`Generated id --> ${idForEmail}`}
      />
      <h1> The "idForEmail" is {idForEmail} </h1>

      <button onClick={handleBack}>Back</button>
    </>
  );
};
