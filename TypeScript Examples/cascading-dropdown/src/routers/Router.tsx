import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./../pages/Home/Home"));
const Homepage1 = lazy(() => import("./../pages/Home/Home1"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading........!</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage1" element={<Homepage1 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
