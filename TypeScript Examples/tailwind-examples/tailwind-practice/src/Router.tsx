import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home"));
const Grid1 = lazy(() => import("./pages/Grid1"));
const Grid2 = lazy(() => import("./pages/Grid2"));
const Flex1 = lazy(() => import("./pages/Flex1"));
const GridAndFlex = lazy(() => import("./pages/GridAndFlex"));
const Newpage = lazy(() => import("./pages/Newpage"));
const ErrorPage = lazy(() => import("./pages/Error"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading........!</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grid1" element={<Grid1 />} />
          <Route path="/grid2" element={<Grid2 />} />
          <Route path="/flex1" element={<Flex1 />} />
          <Route path="/gridandflex1" element={<GridAndFlex />} />
          <Route path="/newpage" element={<Newpage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
