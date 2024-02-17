import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userinfo: [],
    modelForm: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        adduser: (state, action) => {
            state.userinfo.push(action.payload)
        },
        hadleModelForm: (state, action) => {
            state.modelForm = action.payload;
        },
    },
})

export const { adduser, hadleModelForm } = userSlice.actions

export default userSlice.reducer