import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Home = () => {
  const movieText = 'Harry'
  const showText = 'Friends'
  // wenever we get values from the api we want to dispatch an actio so that after dispatch this will go to the reducer and the reducer will update he state

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch]);

  return (
    <>
    <div className='banner-img'> </div>
    <MovieListing/>
    </>
  ) 
}

export default Home