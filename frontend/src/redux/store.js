import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesSlice from './moviesSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
    reducer: {
        app: userReducer,
        movie:moviesSlice,
        search:searchSlice
    },
})