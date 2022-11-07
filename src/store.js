import {configureStore, createSlice} from '@reduxjs/toolkit'
import cartSlice from './Redux/Cart/CartSlice'

export const store =configureStore({
    reducer:{
             cartSlice:cartSlice
    }
})