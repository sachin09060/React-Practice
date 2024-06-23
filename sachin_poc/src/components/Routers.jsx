import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home"
import About from "./About";
import Contact from "./Contact";
import Counter from "./Counter"
import CounterZustand from "./CounterZustand";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/counterZustand" element={<CounterZustand />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
