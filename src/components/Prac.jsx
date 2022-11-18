import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
const Prac = () => {
    const[state,setState]=useState([])
    useEffect(()=>{
          axios.get("https://jsonplaceholder.typicode.com/todos").
          then(res=>console.log(res.data))
          .catch((err)=>console.log(err))
    })
  return (
    <div>

    </div>
  )
}

export default Prac;