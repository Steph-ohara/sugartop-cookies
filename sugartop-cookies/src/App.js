import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Pricing from "./components/pricing/Pricing"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar fixed="top" />
        
        <Routes>
        <Route path="/About" element={<About/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        
        <Footer fixed="bottom" />
      </div>
    </BrowserRouter>
  );
}

export default App;