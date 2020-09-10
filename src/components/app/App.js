import React from 'react';
import SearchBar from '../search-bar/SearchBar';
import SearchResults from '../search-results/SearchResults';
import Playlist from '../playlist/Playlist';
import './App.css';

const MOCK_RESULTS = [      
  {
    id: 1,
    name: 'March of the Pigs',
    artist: 'Nine Inch Nails',
    album: 'The Downward Spiral'
  },
  {
    id: 2,
    name: 'Closer',
    artist: 'Nine Inch Nails',
    album: 'The Downward Spiral'
  },
  {
    id: 3,
    name: 'Erase Me',
    artist: 'Nine Inch Nails',
    album: 'The Downward Spiral'
  }
];

const MOCK_PLAYLIST_NAME = 'Jim\'s Funky Playlist';

const MOCK_PLAYLIST = [
  {
    id: 1,
    name: 'March of the Pigs',
    artist: 'Nine Inch Nails',
    album: 'The Downward Spiral'
  },
  {
    id: 2,
    name: 'Closer',
    artist: 'Nine Inch Nails',
    album: 'The Downward Spiral'
  },
  {
    id: 3,
    name: 'Erase Me',
    artist: 'Nine Inch Nails',
    album: 'The Downward Spiral'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: MOCK_RESULTS,
      playlistName: MOCK_PLAYLIST_NAME,
      playlistTracks: MOCK_PLAYLIST
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    const tracks = this.state.playlistTracks;
    if (!tracks.includes({id: track.id})) {
      tracks.push(track);
      this.setState({
        playlistTracks: tracks
      });
    }
    console.log(this.state.playlistTracks);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
