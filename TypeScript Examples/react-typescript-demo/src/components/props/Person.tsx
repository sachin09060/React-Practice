import React from "react";
import { personNameType } from "./Person.type";

const Person = (props: personNameType) => {
  return (
    <div>
      Welcome back {props.name.firstname} {props.name.lastname}
    </div>
  );
};

export default Person;
