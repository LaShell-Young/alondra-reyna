import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      {/* This is the alias of BrowserRouter i.e. Router */}
      {/* <Router> */}
      <Routes>
        {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

        {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
        {/* <Redirect to="/" /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
