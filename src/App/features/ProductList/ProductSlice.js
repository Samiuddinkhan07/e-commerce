import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { ProductApi } from "./ProductAPI";


const initialState = {
    value:0,
    status:"idle"
}

export const incrementAsync = createAsyncThunk(
    'counter/PrductApi',
    async (amount) =>{
        const response = await ProductApi(amount);
        return response.data
    }
);


export const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        increment:(state) =>{
            state.value + 1
        },
       extraReducers:(builder) =>{
        builder.addCase(incrementAsync.pending,(state) =>{
            state.status = "loading"
        })
        .addCase(incrementAsync.fulfilled,(state,action)=>{
            state.status = "idle"
            state.value += action.payload
        })
       }
    }
})

export const {increment} = ProductSlice.actions


export const selectedCount = (state) => state.product.value

export default ProductSlice.reducer;