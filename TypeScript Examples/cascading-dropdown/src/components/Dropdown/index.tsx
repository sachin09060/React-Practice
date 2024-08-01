import React from "react";

interface OptionProps{
    value:string;
}

interface DropdownProps {
  placeholder: string;
  value: any;
  onChange:any;
  options : OptionProps[];
}

const Dropdown = (props: DropdownProps) => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-body">
        <select
          className="dropdown"
          value={props.value}
          onChange={props.onChange}
          style={{
            width: "612.800px",
            height: "36.400px",
            margin: "10px 0px 10px 0px",
          }}
        >
          <option>{props.placeholder}</option>
           {props.options.map((option:OptionProps)=>{
                return <option>{option.value}</option>
            })}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
