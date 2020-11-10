import React, { Component } from 'react';

class Search extends Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handlSubmit = e => {
    e.preventDefault();

    if(this.state.query !== "") {
    this.props.searchMovie(this.state.query)
    this.setState({ query:''})
  } else {
    alert('query est vide')
  }
  }

  render() {
    console.log('props Search',this.props);
    return (
      <form class="form-inline" onSubmit={this.handlSubmit}>
        <div class="md-form my-0">
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={this.state.query}
            onChange={this.handleChange}

          />
        </div>
      </form>
    );
  }
}

export default Search;
