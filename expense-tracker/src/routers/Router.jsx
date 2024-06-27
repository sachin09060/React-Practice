import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpenseApp from "../components/ExpenseApp";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExpenseApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
