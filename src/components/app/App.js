import React from 'react';
import SearchBar from '../search-bar/SearchBar';
import SearchResults from '../search-results/SearchResults';
import Playlist from '../playlist/Playlist';
import './App.css';

function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
    );
}

export default App;
