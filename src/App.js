import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/navBar';
import Footer from './Components/Footer/footer';
import Presentation from './Views/Presentation/presentation';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <div>
    <Presentation/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
