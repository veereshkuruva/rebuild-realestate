import React, { useState } from 'react'
import './Search.css'
import data from '../../Data'
import { useSelector, useDispatch } from 'react-redux'

 import {location_search,price_search,date_search,propertyType_search } from '../../Redux/Cart/cartSlice'

const Search = () => {
  // const data = useSelector((state)=>state.cartSlice.cartItems)
  // console.log(data)
  const [time , setTime] = useState("");
  const [location, setLocation] = useState("");
  const [price,setPrice] = useState("");
  const [propertyType,setPropertyType] = useState("");

const dispatch =useDispatch()
  const changeHandler = (e) => {
    setLocation(e.target.value)
    console.log(location)
  }

  const timeHandler =(e) => {
    setTime(e.target.value);
    console.log(time)
  }

  const priceHandler = (e) => {
    setPrice(e.target.value);
    console.log(price)
  }

  const propertyHandler = (e) => {
    setPropertyType(e.target.value);
    console.log(propertyType)
  }

  const clickBtnHandler = (...param) => {
    if(location.length > 0 ){
      dispatch(location_search(param[0]));
    }else if(price.length > 0){
      dispatch(price_search(param[1]))
    }else if(time.length > 0){
      dispatch(date_search(param[3]))
    }else if(propertyType.length > 0){
      dispatch(propertyType_search(param[2]))
    }
    console.log(param);
    
  }

  return (
    <>
      <div>

        <div className='search'>
          <span className='searchheading'><b>Search properties to rent</b></span>


        </div>
        <div className='propeties'>
          <div className='loc'>
            <div>Location</div>
            <input type="text"
              name='location'
              onChange={changeHandler}
            />

          </div>
          <div className='cardsame'>
            <div>When</div>
            <input type="date" id="birthday" name='date' onChange={timeHandler} />
          </div>
          <div className='cardsame'>
            <div >price</div>
            <select onChange={priceHandler} >
              <option value='500-2500'>1000-2500</option>
              <option value='2500-5000'>2500-5000</option>
            </select>
          </div>
          <div className='cardsame'>
            <div>Property</div>
            <select onChange={propertyHandler}>
              <option value='1bhk'>1bhk</option>
              <option value='2bhk'>2bhk</option>
              <option value='3bhk'>3bhk</option>
            </select>
          </div>
          <div className='searchbtn'>
            <button onClick={()=>clickBtnHandler(location,price,propertyType,time)} style={{"color":"black"}}>Search</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Search