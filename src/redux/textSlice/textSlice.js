import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchText = createAsyncThunk(
    "text/getText",
    async (url) => {
        const res = await axios.get(url).then(res => (res.data))
        return res
    }
)


export const textSlice = createSlice({
    name:"text",

    initialState:{
        items:[],
        status:"",
    },

    reducers:{},
    extraReducers:{
        [fetchText.pending] : (state) => {
            state.status = "loading"
        },

        [fetchText.rejected] : (state) => {
            state.status = "rejected"

        },
        [fetchText.fulfilled] : (state,action) => {
            state.status = "succided"

            state.items = action.payload
        }
    }
});



export default textSlice.reducer;