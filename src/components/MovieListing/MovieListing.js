import React from 'react';
import { useSelector } from 'react-redux'; 
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.scss'

const MovieListing = () => {
  // getAll the movies
  const movies = useSelector(getAllMovies);
   const shows = useSelector(getAllShows);

  let renderMovies, renderShows = ''

  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie}/>
    }
    )
  ) : (
  <div className='movies-error'>
    <h3>{movies.error}</h3>
  </div>
  )
    renderShows =
      shows.Response === "True" ? (
        shows.Search.map((show, index) => {
          return <MovieCard key={index} data={show} />;
        })
      ) : (
        <div className="movies-error">
          <h3>{shows.error}</h3>
        </div>
      );
  
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
}

export default MovieListing;