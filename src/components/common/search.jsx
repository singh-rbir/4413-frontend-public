import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';

class Search extends Component {
  render() {
    return (
      <div className="search__bar">
        <div className="search__bar__input">
          <input
            type="text"
            name="search"
            aria-label="Search all Books"
            placeholder="Search all Books"
          />
          <FcSearch className="search_logo" />
        </div>
      </div>
    );
  }
}

export default Search;
