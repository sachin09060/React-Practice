import React from "react";
import { Names } from "./Person.type";
type PersonNamesType = {
  names: Names[];
};

const PersonList = (props: PersonNamesType) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.firstname}>
            {name.firstname} {name.lastname}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
