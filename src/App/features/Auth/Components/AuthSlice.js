import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApi } from "./AuthAPI";


const initialState = {
    value:0,
    status:"idle"
}

export const incrementAsync = createAsyncThunk(
    'counter/Authapi',
    async (amount) =>{
        const response = await ProductApi(amount);
        return response.data
    }
);


export const AuthSlice = createSlice({
    name:"Auth",
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

export const {increment} = AuthSlice.actions


export const selectedCount = (state) => state.product.value

export default AuthSlice.reducer;