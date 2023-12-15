import { createSlice,createAsyncThunk, asyncThunkCreator } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    searchContent:{},
    loading:false,
    hasError:false
}

export const getProfileData = createAsyncThunk('fetch/profile',async(name)=>{
    const response = await axios.get('https://api.github.com/users/'+name);
    return response.data;
})

export const searchSlice = createSlice({
    name:'userDetail',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getProfileData.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(getProfileData.fulfilled,(state,action)=>{
            state.loading = false,
            state.searchContent = action.payload
        })
        builder.addCase(getProfileData.rejected,(state,action)=>{
            state.loading = false
            state.hasError = true
        })
    } 
    
    });

    export default searchSlice.reducer;