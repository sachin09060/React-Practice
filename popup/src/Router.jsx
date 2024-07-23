import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NormalScreen from "./components/NormalScreen";
import PopUpScreen from "./components/PopUpScreen";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NormalScreen />} />
          <Route path="/popup" element={<PopUpScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
