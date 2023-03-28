import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import Facts from '../pages/Facts/facts'
import Navbar from "../Navbar/Navbar";
function Navlink() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="about" element={<About />} />
            <Route path="facts" element={<Facts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navlink
