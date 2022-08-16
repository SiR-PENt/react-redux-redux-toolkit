import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: {}
}
// you dont need to create sparate folders for actions, constants, reducers in toolkit. You can combine everything in a single slice


const movieSlice = createSlice({
   name: 'movies',
   initialState,

   reducers: { 
       // in toolkit, the state is mutated for you under the hood. You dont have to do it manually as in useReducer or redux. Hence, you don't have to do all the {...state, movies:'new movies'} bla bla bla. Redux toolkit uses immer to mutate state

    addMovies : ( state, { payload }) => {
    state.movies = payload; 

    // here, lets say movieSlice actions is equal to reducers which is an object that contains addMovies. 

    // addMovies is an action creator function that takes initial state and action(payload has been destructure here) as parameters.
     
    }
   }
})

//In toolkit, action types are created based on reducer names, so let's say in conventional redux, this will be if(action.type) === addMovies.
export const { addMovies } = movieSlice.actions;

//to get a value from the store, syntax:(state, name of the reducer, name of the initialState key). Take it as state is equal to the initialState
export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;