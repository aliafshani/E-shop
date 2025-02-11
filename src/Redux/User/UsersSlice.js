import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


let initialState = {
    status: "loading",
    data: null
}

export const getUserFromServer = createAsyncThunk("user/getUserFromServer", async (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(data => data)
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(getUserFromServer.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(getUserFromServer.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = "succeeded"
            })

    }
})


export default userSlice.reducer