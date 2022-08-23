import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

// asyncThunk takes 3 parameters, but we don't need the third one here. First parameter is a string(with the name of the slice)/name of the asyncThunk function. Second parameter is the function that calls the API

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    // const movieText = "Harry";
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
      return response.data
})

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    // const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (imdbID) => {
    // const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&i=${imdbID}&Plot=full`
    );
    return response.data;
  }
);


const initialState = {
    movies: {},
    shows:{},
    selectedMovieOrShow:{}
}


// you dont need to create sparate folders for actions, constants, reducers in toolkit. You can combine everything in a single slice


const movieSlice = createSlice({
  name: "movies",
  initialState,

  reducers: {
    // in toolkit, the state is mutated for you under the hood. You dont have to do it manually as in useReducer or redux. Hence, you don't have to do all the {...state, movies:'new movies'} bla bla bla. Redux toolkit uses immer to mutate state


      // here, lets say movieSlice actions is equal to reducers which is an object that contains addMovies.

      // addMovies is an action creator function that takes initial state and action(payload has  been des tructure here) as parameters.

    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    }
  }, 
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
      // return {...state, movies: payload}
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

//In toolkit, action types are created based on reducer names, so let's say in conventional redux, this will be if(action.type) === addMovies.
export const { removeSelectedMovieOrShow } = movieSlice.actions;

//to get a value from the store, syntax:(state, name of the reducer, name of the initialState key). Take it as state is equal to the initialState
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow

export default movieSlice.reducer;