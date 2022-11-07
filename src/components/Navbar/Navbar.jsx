import React from 'react'
import Cards from '../Cards/Cards'
import './Navbar.css'
import { useSelector } from 'react-redux'
// import Card from '../Cards/Cards'



const Navbar = () => {
  const Emptycart=useSelector((state)=>state.cartSlice.EmptyCart)
  console.log(Emptycart)
  return (

         <>
      
    <header>

      <h2 className='logo'>Estate</h2>
      <nav>
        <ul className='nav-links'>
         
          <li><a href='#'>Rent</a></li>
          <li><a href='#'>Buy</a></li>
          <li><a href='#'>Sell</a></li>
          <li><a href='#'>Manage Property</a></li>
          <li><a href='#'>Resource</a></li>
        </ul>
      </nav>
      <a href='#'><button>Login</button></a>
      <a href='#'><button>signup</button></a>
    </header>
  
    </>
      
  )
}

export default Navbar