import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../Cards/Cards'
import Navbar from '../Navbar/Navbar'
import './like.css'

const Like = () => {
    // console.log("namste")
    const Emptycart =useSelector((state)=>state.cartSlice.EmptyCart)
    console.log(Emptycart)

  return (
    <div className='fav'>
        {
            Emptycart.map((ele)=>{
                return(
                    <Cards ele={ele}/>

                )
            })
        }
       
    </div>
  )
}

export default Like