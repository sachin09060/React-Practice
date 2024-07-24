import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...!</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Router;
