import React from "react";
import Navbar from "./components/layouts/Navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/pages/Home";
import RiwayatAbsen from "./components/pages/RiwayatAbsen";
import Profile from "./components/pages/Profile";
import Izin from "./components/pages/Izin";
export default function App(){
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/riwayatabsen" element={<RiwayatAbsen/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/izin" element={<Izin/>}/>
      </Routes>
    </Router>
    </>

  )
}