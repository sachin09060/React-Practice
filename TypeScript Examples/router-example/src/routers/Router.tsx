import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  Route,
  Routes,
} from "react-router-dom";
// import { basename } from "path";

// Static import____________________________________________________________________________________________________________________

// import Link1 from "../pages/Link1/Link1";
// import Link2 from "../pages/Link2/Link2";
// import NavLink1 from "../pages/NavLink1/NavLink1";
// import NavLink2 from "../pages/NavLink2/NavLink2";
// import ErrorPage from "../pages/Error/ErrorPage";
// import Layout from "../layout/Layout";

// Dynamic Lazy import______________________________________________________________________________________________________________

import React, { lazy, Suspense } from "react";
import Layout from "../layout/Layout";
import { resolve } from "path";
const Link1 = lazy(() => import("../pages/Link1/Link1"));
const Link2 = lazy(() => wait(1000).then( () => import("../pages/Link2/Link2")));
const NavLink1 = lazy(() => import("../pages/NavLink1/NavLink1"));
const NavLink2 = lazy(() => import("../pages/NavLink2/NavLink2"));
const ErrorPage = lazy(() => import("./../pages/Error/ErrorPage"));
const LoadingPage = lazy(() => import("./../components/Loading/index"));

// Creating delay time function to see the loading page_____________________________________________________________________________

const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const Router = () => {
  return (
    // Static import (HashRouter with hashType = Default)____________________________________________________________________________

    // <HashRouter basename="app">
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route index element={<Link1 />} />
    //       <Route path="*" element={<ErrorPage />} />
    //       <Route path="link2" element={<Link2 />} />
    //       <Route path="navlink" element={<NavLink1 />} />
    //       <Route path="navlink2" element={<NavLink2 />} />
    //     </Route>
    //   </Routes>
    // </HashRouter>

    // Static import (MemoryRouter)_________________________________________________________________________________________________

    // <MemoryRouter initialEntries={['/']}>
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route index element={<Link1 />} />
    //       <Route path="*" element={<ErrorPage />} />
    //       <Route path="link2" element={<Link2 />} />
    //       <Route path="navlink" element={<NavLink1 />} />
    //       <Route path="navlink2" element={<NavLink2 />} />
    //     </Route>
    //   </Routes>
    // </MemoryRouter>

    // Static import (BrowserRouter)____________________________________________________________________________________________________

    // <BrowserRouter basename="/app">
    //     <Routes>
    //       <Route element={<Layout />}>
    //         <Route index element={<Link1 />} />
    //         <Route path="*" element={<ErrorPage />} />
    //         <Route path="link2" element={<Link2 />} />
    //         <Route path="navlink" element={<NavLink1 />} />
    //         <Route path="navlink2" element={<NavLink2 />} />
    //       </Route>
    //     </Routes>
    // </BrowserRouter>

    // Dynamic Lazy import(BrowserRouter)________________________________________________________________________________________________

    <BrowserRouter basename="/app">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route element={<Layout />}>
            <Route index element={<Link1 />} />
            <Route path="link2" element={<Link2 />} />
            <Route path="navlink" element={<NavLink1 />} />
            <Route path="navlink2" element={<NavLink2 />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
