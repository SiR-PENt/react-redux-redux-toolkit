import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/MovieApi'
import {APIKey} from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'

const Home = () => {
  const movieText = 'Harry'

  // wenever we get values from the api we want to dispatch an actio so that after dispatch this will go to the reducer and the reducer will update he state

  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err) => {
        console.log('Err :', err);
      });
     dispatch(addMovies(response.data))
    }
    fetchMovies()
  }, [])

  return (
    <>
    <div className='banner-img'> </div>
    <MovieListing/>
    </>
  )
}

export default Home