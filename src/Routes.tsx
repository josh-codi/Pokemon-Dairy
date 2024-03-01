import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Views/Home/Home';
import List from './Views/List/List';


function Routers() {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/list/:id?' element={<List/>}/>
  </Routes>
}

export default Routers