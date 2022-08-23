import React, {useState } from 'react'
import { Link} from 'react-router-dom'
import user from '../../images/user.jpg'
import './Header.scss'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Header = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    if(term === "") return alert('Please enter search term')
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term));
    setTerm('')
  }

  return (
  <div className='header'>

    <div className='logo'>
        <Link to='/'>
          Movie App    
        </Link>
    </div>
    <div className='search-bar'>
    <form onSubmit={submitHandler}>
     <input type='text' value={term} placeholder='Search Movies or Shows' 
     onChange={(e) => setTerm(e.target.value)}/>
     <button type='button'>Search</button>
    </form>
    </div>
  <div className='user-image'>
  <img src={user} alt=''/>
  </div>
  </div>
  )
}

export default Header