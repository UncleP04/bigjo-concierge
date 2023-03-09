import React, { useEffect } from 'react'
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePg";
import WhyPage from "./Pages/WhyPg";
import AboutPage from "./Pages/AboutPg";
import ContactPage from "./Pages/ContactPg";
import Navbar from "./Components/Nav";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
