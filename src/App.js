import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import Footer from './Components/Footer/footer';
import Presentation from './Views/Presentation/presentation';
import Mail from './Views/Mail/mail';
import Servicios from './Components/Services/services.jsx'
import AboutUs from './Components/About/aboutUs';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/contact" element={<Mail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Servicios />} />
      </Routes>
      <div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

