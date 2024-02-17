import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userdata/userSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
    },
})