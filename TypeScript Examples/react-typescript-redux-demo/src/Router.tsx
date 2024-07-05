import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const StudentForm = lazy(() => import("./pages/Student/StudentForm"));
const About = lazy(() => import("./pages/AboutPage"));
const Counter = lazy(() => import("./pages/Counter/CounterPage"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading........!</div>}>
        <Routes>
          <Route path="/" element={<StudentForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
