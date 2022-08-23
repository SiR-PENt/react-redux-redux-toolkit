// first step, create store then provide to the component

import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movieSlice' //(movieSlice.reducer)

//  You can add more reducers, all you just have to do is add their names
export const store = configureStore({
    reducer : { 
        movies: moviesReducer 
    } ,
})