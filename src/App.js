import React, { useEffect } from 'react'
import "./App.css";
import HomePage from "./Pages/HomePg";
import Navbar from "./Components/Nav";
import ScrollButton from './Components/ScrollBtn';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    // const [darkMode, setDarkMode] = React.useState(true);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Navbar />
        <HomePage />
        <ScrollButton />
    </div>
  );
}

export default App;
