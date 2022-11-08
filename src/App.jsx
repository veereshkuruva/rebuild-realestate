import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Like from './components/FavPage/Like';

import Main from './components/Main';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    
    <div>
       <Navbar/>
     
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/fav' element={<Like/>}/>
         
        </Routes>
  
    </div>
  )
}

export default App;