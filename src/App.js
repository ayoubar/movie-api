import logo from './logo.svg';
import React , { Component, Fragment } from 'react'
import axios from 'axios'
import {  Movies, SideNav } from "./components/test";
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import MovieDetail from './components/movies/MovieDetail'

import './App.css';

class App extends Component {

  state = {
    movies:[],
    movie:{},
    loading:true
  }


  componentDidMount()  {
    this.getAllMovies()
  }

  getAllMovies = async() => {
    try {

      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e366d974f73ae203397850eadc7bce1f`)
      const data = await res.data
      this.setState({ movies: data.results})

      
    } catch (error) {
      
    }
  }

  getDetailMovie = async (id) => {
    try {
      this.setState({ loading: true})
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=e366d974f73ae203397850eadc7bce1f&append_to_response=video`)
      const data = await res.data
      this.setState({ movie: data, loading:false})

      
    } catch (error) {
      
    }
  }

  render() {
  return (
    <BrowserRouter>
        <SideNav title={"Movie API"}/>
        <Switch>
        <Route exact path='/' render = {props => (
            <div className="container">
          <Movies data={this.state.movies} />
          </div>
        )} />


        <Route exact path='/movie/:id' render={ props => (
          <MovieDetail {...props} getDetailMovie={this.getDetailMovie}  movie={this.state.movie} loading={this.state.loading}/>
        )} /> 
       

        </Switch>
    </BrowserRouter>
   
  );
}
}

export default App;
