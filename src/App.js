import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Participation from "./pages/Participation";
import Track_process from "./pages/Track_process";
import Fun_Fact from "./pages/Fun_fact";

import './App.css';
//import './Logo.jpg';

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/What You Can Do' element={<Participation />} />
        <Route path='/Track Process' element={<Track_process />} />
        <Route path='/Fun Fact' element={<Fun_Fact />} />
      </Routes>
    </BrowserRouter>
  );
=======
    
    <div>
      <div className='logo'>

      </div>
      <body>
      </body>
    </div>
)
>>>>>>> 9544ae0935d8cd10c680c6c87d27bf1bcec8c83e
}

export default App;
