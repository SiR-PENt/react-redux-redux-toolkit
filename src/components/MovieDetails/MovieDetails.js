import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import './MovieDetails.scss'

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID]);
  
  const data = useSelector(getSelectedMovieOrShow);

  return (
    <div className="movie-section">
       {
        Object.keys(data).length === 0 ?
        <div>...Loading</div> :
       ( <>
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <p>
            IMDB rating <span>:{data.imdbRating} </span>
          </p>

          <p>
            IMDB Votes <span>:{data.imdbVotes} </span>
          </p>

          <p>
            RunTime <span>:{data.imdbRuntime} </span>
          </p>

          <p>
            IMDB Year <span>:{data.imdbYear} </span>
          </p>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>

          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>

          <div>
            <span>Genres</span>
            <span>{data.Genre}</span>
          </div>

          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>

          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <section className='section-right'>
        <img src={data.Poster} alt={data.Title}/>
      </section>
        </>
        )
       }
    </div>
  );
}

export default MovieDetails