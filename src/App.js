import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Homescreen";
import HeroSection from "./Pages/Home/HeroSection";
import AboutMe from "./Pages/Home/AboutMe";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import ContactMe from "./Pages/Home/ContactMe";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/main" element={<HeroSection />}></Route>
            <Route path="/about" element={<AboutMe />}></Route>
            <Route path="/portfolio" element={<MyPortfolio />}></Route>
            {/* <Route path="/blog" element={<blog />}></Route> */}
            <Route path="/contact" element={<ContactMe />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
