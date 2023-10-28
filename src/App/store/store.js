import { configureStore } from "@reduxjs/toolkit"
import ProductSlice from "../features/ProductList/ProductSlice"

export const store = configureStore({
    reducer:{
        product:ProductSlice
    }
}) 