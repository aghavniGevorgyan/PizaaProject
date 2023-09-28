import { configureStore } from "@reduxjs/toolkit";
import filter from "./slice/filterSlice";
import fillProducts from './slice/pizzaSlice'
import addcart from './slice/cartSlice'

export const store = configureStore({
    reducer: {
        filter,
        fillProducts,
        addcart,
    }
})