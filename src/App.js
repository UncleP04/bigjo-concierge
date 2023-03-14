import React, { useEffect } from 'react'
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePg";
import Navbar from "./Components/Nav";
import ScrollButton from './Components/ScrollBtn';
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
        </Routes>
        <ScrollButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
