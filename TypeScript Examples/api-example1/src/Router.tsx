import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

const GET = lazy(() => import("./pages/Get/GET"));
const POST = lazy(() => import("./pages/Post/POST"));
const PUT = lazy(() => import("./pages/Put/PUT"));
const DELETE = lazy(() => import("./pages/Delete/DELETE"));
const PopUpComponent = lazy(() => import("./components/popup"));
const PopUp = lazy(() => import("./pages/pop-up/Pop-up"));

const Router = () => {
  return (
    <BrowserRouter basename="/api">
      <Suspense fallback={<div>Loading...!</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<GET />} />
            <Route path="/post" element={<POST />} />
            <Route path="/put" element={<PUT />} />
            <Route path="/delete" element={<DELETE />} />
            <Route path="/pop-up" element={<PopUp />} />
          </Route>
          <Route path="/popup" element={<PopUpComponent />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
