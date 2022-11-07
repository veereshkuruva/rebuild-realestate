import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import CardBox from './components/CardContainer/CardBox';
import Cards from './components/Cards/Cards';
import FavPage from './components/FavPage';
import Main from './components/Main';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
        <Navbar/>
     
        <BrowserRouter>
       <Routes>
        <Route path='/' element={<CardBox/>} />
    </Routes>
  </BrowserRouter>,
    </div>
  )
}

export default App;