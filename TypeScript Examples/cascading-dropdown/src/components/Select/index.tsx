import React from "react";
import "./Dropdown.css";
import Select from "react-select";

interface selectProps {
  placeholder: string;
  value: any;
  options: any;
  onChange: any;
  getOptionLabel?:any;
  getOptionValue?:any;
}

const Dropdown = (props: selectProps) => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-body">
        <Select
          placeholder={props.placeholder}
          value={props.value}
          options={props.options}
          onChange={props.onChange}
          getOptionLabel={props.getOptionLabel}
          getOptionValue={props.getOptionValue}
        />
      </div>
    </div>
  );
};

export default Dropdown;
