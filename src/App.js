import React from 'react';
import {BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
   <div className="App">
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
      <Route element = {<PageNotFound/>} />
    </Routes>
      <Footer/>
    </BrowserRouter>
   </div>
  );
}

export default App;
