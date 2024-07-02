import React from "react";
import Button from "./Button";
type InputPropsType = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputPropsType) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input type="text" value={props.value} onChange={handleInputChange} />
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
    </div>
  );
};

export default Input;
