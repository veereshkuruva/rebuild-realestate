import React from 'react'
import './card.css'
import { BiHome } from "react-icons/bi";
import { FaGratipay,FaBath } from "react-icons/fa";
import {AiFillUsb } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '/src/Redux/Cart/cartSlice.js';


const Cards = ({ele}) => {
  const dispatch =useDispatch()
// console.log(ele)

  
  const clickHandler =(params) =>{
    console.log(params)
       
    dispatch(addToCart(params))
  
  }
  
   
  return (
  

    
    
    <div className='card'>
     
    <img src='https://thearchitectsdiary.com/wp-content/uploads/2022/03/foresight-associates-19.jpg' className='card-image'/>
    <div className='container' key={ele?.id}>
      <div className='sub-div'>
         <h1 key={ele?.id}></h1>
      <h3 style={{"color":"blue"}}>{ele?.price}</h3>
          <span><FaGratipay/></span>
      </div>
     
      <div className='location_details'>
      <h4 className='title'>{ele?.location}</h4>
      <p>2699 Green Valley,Highland Lake,FL</p>
     
      </div>
      <div className='icons'>
      <span><BiHome style={{"fontSize":"20px"}}/>200/sq</span>
      <span><FaBath style={{"fontSize":"20px"}}/>2bathrooms</span>
      <span><AiFillUsb style={{"fontSize":"20px"}}/>2bhk</span>
      </div>
    
        <button className='btn' onClick={()=>clickHandler(ele)}>Add Favorate</button>
    </div>
     
    </div>
    
  )
}

export default Cards