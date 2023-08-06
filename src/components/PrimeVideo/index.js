import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovies = 'ACTION'
const comedyMovies = 'COMEDY'
const horrorMovies = 'HORROR'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    const actionMovieList = moviesList.filter(
      each => each.categoryId === actionMovies,
    )
    const comedyMovieList = moviesList.filter(
      each => each.categoryId === comedyMovies,
    )
    const horrorMovieList = moviesList.filter(
      each => each.categoryId === horrorMovies,
    )
    return (
      <div className="main-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="cross"
          className="prime-img"
        />

        <div className="movies-cont">
          <h1 className="heading">Action Movies</h1>
          <MoviesSlider data={actionMovieList} />
          <h1 className="heading">Comedy Movies</h1>
          <MoviesSlider data={comedyMovieList} />
          <h1 className="heading">Horror Movies</h1>
          <MoviesSlider data={horrorMovieList} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
