import React, { Component } from 'react';
import MovieItem from './MovieItem';
export default class Movies extends Component {
  render() {
    const { data } = this.props;
    console.log(data.length);

    return (
      <div className="row mt-4">
        {data.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </div>
    );
  }
}
