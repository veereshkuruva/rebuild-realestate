import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../Cards/Cards'
import './cardbox.css'

const CardBox = () => {
    const cartItems =useSelector((state)=>state.cartSlice.cartItems)
    // console.log(cartItems)
    
     
      
  return (
    <div className='card-box'>
        <h2>tHis is CartItems Details</h2>
        {cartItems.map((ele)=>{
          return (
           
              <Cards ele = {ele}/>
             
          )
         
      })
    }
       
    </div>
  )
}

export default CardBox