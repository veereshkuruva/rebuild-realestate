import React ,{useState}from 'react'
import Cards from '../Cards/Cards'
import './Navbar.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import Card from '../Cards/Cards'
// import Search from '../PropertySeacrch/Search'

import { useNavigate } from 'react-router-dom'




const Navbar = () => {
 
  const navigate = useNavigate();
  const [click,setClick] =useState(false)
  const handleClick =()=>setClick(!click)
 
  return (

         <>
      

    <header>
   
    <Link to='/'><h2 className='logo'  >Estate</h2></Link>

      
      <nav>
        <ul className="nav-links">
         
          <li><a href='#'>Rent</a></li>
          <li><a href='#'>Buy</a></li>
          <li><a href='#'>Sell</a></li>
          <li><a href='#'>Manage Property</a></li>
          <li><a href='#'>Resource</a></li>
       
          <Link to='/fav'> <button style={{"background":"orange"}}>Fav</button></Link>
   
        </ul>
      </nav>
            <div onClick={ handleClick}>
            {
              click ? ( <i className='fas fa-bars toggle'></i>):(<i class="fa fa-times crossover"  aria-hidden="true"></i>)
            }
          
             
              
            </div>
      
      <a href='#'><button className='btn1'>Login</button></a>
      <a href='#'><button className='btn1'>signup</button></a>
    </header>
   
    </>
      
  )
}

export default Navbar