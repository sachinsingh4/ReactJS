import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Link1 from "./Link";
function Route1() {
  return (
    <Router>
      <Link1 />
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default Route1;
