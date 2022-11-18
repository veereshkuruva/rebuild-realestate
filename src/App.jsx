import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Like from './components/FavPage/Like';

import Main from './components/Main';
import Navbar from './components/Navbar/Navbar';
import Prac from './components/Prac';

const App = () => {
  return (
    
    <div>
       <Navbar/>
     
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/fav' element={<Like/>}/>
         
        </Routes>
             <Prac/>
    </div>
  )
}

export default App;