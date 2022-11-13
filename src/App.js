import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Participation from "./pages/Participation";
import TrackProcess from "./pages/TrackProcess";
import FunFacts from "./pages/FunFact";
import logo from "./Logo.jpg";
import './App.css';
import Footer from "./components/navbar/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div style={{backgroundColor: 'rgb(255, 232, 0)', width: '100%', height:"1000px", top:"0%"}}>
      <div className="custom-cursor">
      <a href={window.location.origin}><img className="center" src={logo} height="150"/></a>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/What You Can Do' element={<Participation />} />
        <Route path='/Track Process' element={<TrackProcess />} />
        <Route path='/Fun Facts' element={<FunFacts />} />
      </Routes>
      </div>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
