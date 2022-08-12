// first step, create store then provide to the component

import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movieSlice' //(movieSlice.reducer)


export const store = configureStore({
    reducer : moviesReducer,
})