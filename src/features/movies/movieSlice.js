import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: []
}
// you dont need to create sparate folders for actions, constants, reducers in toolkit. You can combine everything in a single slice


const movieSlice = createSlice({
   name: 'movies',
   initialState,
   reducers: {
    addMovies : ( state, { payload }) => {
    state.movies = payload; 
    // in toolkit, the state is mutated for you under the hood. You dont have to do it manually as in useReducer or redux. Hence, you don't have to do all the {...state, movies:'new movies'} bla bla bla. Redux toolkit uses immer to mutate state
        
    }
   }
})

export const { addMovies } = movieSlice.actions;

export default movieSlice.reducer;