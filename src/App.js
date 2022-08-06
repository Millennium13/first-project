import React from "react";
import Home from "./Home/index";
import { Route,Routes } from "react-router-dom";

import Navbar from "./Navbar/index"
import Card from "./Card/index";
import More from "./More/index";
import Thanks from "./Thanks/index";


const App = () =>{
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/card" element={<Card />}/>
        <Route path="/more" element={<More />}/>
        <Route path="/thanks" element={<Thanks />}/>
      </Routes>
    </>
  )
}

export default App;