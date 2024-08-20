import React, { useState } from "react";
import Header from "./Header";
import Pagination from "../components/Pagination";

const Newpage = () => {
  return (
    <>
      <Header />
      <Pagination itemsPerPage={20} totalItems={400}/>
    </>
  );
};

export default Newpage;
