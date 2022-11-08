import React from 'react'
import Cards from '../Cards/Cards'
import './Navbar.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import Card from '../Cards/Cards'

import { useNavigate } from 'react-router-dom'



const Navbar = () => {
 
  const navigate = useNavigate();
 
  return (

         <>
      
    <header>
      <Link to ='/'><h2 className='logo' >Estate</h2></Link>

      
      <nav>
        <ul className='nav-links'>
         
          <li><a href='#'>Rent</a></li>
          <li><a href='#'>Buy</a></li>
          <li><a href='#'>Sell</a></li>
          <li><a href='#'>Manage Property</a></li>
          <li><a href='#'>Resource</a></li>
       
       <Link to='/fav'> <button >Fav</button></Link>
   
    <Link to='/log'><button>login</button></Link>
        </ul>
      </nav>

      {/* <a href='#'><button>Login</button></a> */}
      <a href='#'><button>signup</button></a>
    </header>
  
    </>
      
  )
}

export default Navbar