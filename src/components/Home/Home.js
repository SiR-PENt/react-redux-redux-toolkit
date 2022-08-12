import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/MovieApi'
import {APIKey} from '../../common/apis/MovieApiKey'

const Home = () => {
  const movieText = 'Harry'
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err) => {
        console.log('Err :', err);
      });
      console.log('The response from API', response)
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