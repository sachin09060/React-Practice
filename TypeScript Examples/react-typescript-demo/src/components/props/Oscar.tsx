import React from "react";
type OscarPropsType = {
  children: React.ReactNode;
};

const Oscar = (props: OscarPropsType) => {
  return <div>{props.children}</div>;
};

export default Oscar;
