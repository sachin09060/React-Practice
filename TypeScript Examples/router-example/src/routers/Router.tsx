import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./../pages/Home/Home"));
const Formpage = lazy(() => import("./../pages/Form/Form"));
const ThankYouPage = lazy(() => import("./../pages/ThankYou/ThankYou"));
const ThankYouPage2 = lazy(() => import("./../pages/ThankYou2/ThankYou2"));
const ErrorPage = lazy(() => import("./../pages/Error/ErrorPage"));

const Router = () => {
  return (
    <BrowserRouter basename="/app">
      <Suspense fallback={<div>Loading...!</div>}>
        <Routes>
          <Route path="*" element={<ErrorPage />}/>
          <Route path="/" element={<Homepage />}/>
          <Route path="/form" element={<Formpage />} errorElement={<ErrorPage/>} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/thank-you2" element={<ThankYouPage2 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
