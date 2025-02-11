import { configureStore } from '@reduxjs/toolkit'
import userSlice from './User/UsersSlice'

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})