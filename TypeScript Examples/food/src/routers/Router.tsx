import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./../pages/Home/Home"))
const Shop = lazy(() => import("../pages/Shop/Shop"))
const About = lazy(() => import("./../pages/About/About"))
const Contact = lazy(() => import("./../pages/Contact/Contact"))

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading....!</div>}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default Router;
