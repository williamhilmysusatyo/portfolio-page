import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import AboutMe from "./Pages/Home/AboutMe";
import HeroSection from "./Pages/Home/HeroSection";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import MySkills from "./Pages/Home/MySkills";
import ContactMe from "./Pages/Home/ContactMe";
import Footer from "./Pages/Home/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <HeroSection />
          <AboutMe />
          <MyPortfolio />
          <MySkills />
          <ContactMe />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;