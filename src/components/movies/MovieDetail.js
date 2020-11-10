import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

export default class MovieDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.getDetailMovie(id);
  }
  render() {
    // console.log(useParams.id);
    const { movie, loading } = this.props;

    if (loading) return <h1> Loading ....</h1>;
    return (
      <div class="container my-5 py-5 z-depth-1">
        <section class="px-md-5 mx-md-5 text-center dark-grey-text">
          <div class="row">
            <div class="col-md-6 mb-4 mb-md-0">
              <h3 class="font-weight-bold">{movie.original_title}</h3>

              <p class="text-muted text-left">{movie.overview}</p>

              <a
                class="btn btn-primary btn-md ml-0"
                href={`${movie.homepage}`}
                role="button"
              >
                Website
                <i class="fas fa-paperclip ml-2"></i>
              </a>
              <a
                class="btn btn-primary btn-md ml-0"
                target="_blank"
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                role="button"
              >
                IMDB
                <i class="fab fa-imdb ml-2"></i>
              </a>
              <a
                class="btn btn-primary btn-md ml-0"
                href={`${movie.homepage}`}
                role="button"
              >
                Trailer<i class="fas fa-video ml-2"></i>
              </a>

              <hr class="my-5" />

              <p class="font-weight-bold">Genres:</p>

              {movie.genres.map((g) => (
                <span class="badge badge-primary mr-2" key={g.id}>
                  {g.name}
                </span>
              ))}
            </div>

            <div class="col-md-5 mb-4 mb-md-0">
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
