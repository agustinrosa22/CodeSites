import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import Footer from './Components/Footer/footer';
import Presentation from './Views/Presentation/presentation';
import Mail from './Views/Mail/mail';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <div>
    <Presentation/>
    <Mail/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
