import React from 'react';
import Tracklist from '../tracklist/Tracklist';
import './SearchResults.css';

class SearchResults extends React.Component {
  render() {
    
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist />
      </div>
    );
  }
}

export default SearchResults;