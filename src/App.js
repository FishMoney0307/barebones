import './App.css';
import React from "react";
import Home from './Home/Home.js'
import About from './About/About.js';
import Contact from './Contact/Contact.js';
import Navbar from './Navbar.js';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
