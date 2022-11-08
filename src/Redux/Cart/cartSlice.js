import { createSlice } from "@reduxjs/toolkit";
import data from '../../Data';

  const initialState ={
    cartItems:data,
    EmptyCart:[] , 
    amount:50,
    isLoading:true
}
 export const cartSlice =createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
                addToCart:(state,action)=>{
                          state.EmptyCart.push(action.payload)
                    
                     }
                } ,

                // removeItems:(state,action)=>{
                //   const itemId =state.EmptyCart.filter((ele=>ele.id!===(action.payload.id)
                // }
              
    
})
// console.log(cartSlice)
export const {addToCart} =cartSlice.actions
export default cartSlice.reducer