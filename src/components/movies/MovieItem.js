import React from 'react';
import Rating from './rating/Rating';
import { Link } from 'react-router-dom';
// import
const MovieItem = (props) => {
  return (
    <div className="col-md-4">
      <div class="card">
        <div class="view overlay">
          <Link to={`/movie/${props.movie.id}`}>
            <img
              class="card-img-top zoom"
              src={`https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`}
              alt="Card image cap"
            />
          </Link>
        </div>

        <div class="card-body">
          <h4 class="card-title">{props.movie.title}</h4>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
