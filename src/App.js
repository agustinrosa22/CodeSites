import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import Footer from './Components/Footer/footer';
import Presentation from './Views/Presentation/presentation';
import Mail from './Views/Mail/mail';
import Servicios from './Components/Servicios/servicio.jsx'
import AboutUs from './Components/About/aboutUs';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/contacto" element={<Mail />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
      <div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

