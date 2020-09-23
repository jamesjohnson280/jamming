import React from 'react';
import SearchBar from '../search-bar/SearchBar';
import SearchResults from '../search-results/SearchResults';
import Playlist from '../playlist/Playlist';
import { Spotify } from '../../util/spotify';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    const tracks = this.state.playlistTracks;
    if (!tracks.find(t => t.id === track.id)) {
      tracks.push(track);
      this.setState({
        playlistTracks: tracks
      })
    }
  }

  updatePlaylistName(name) {
    if (name === this.state.playlistName) { return; }
    this.setState({
      playlistName: name
    });
  }

  removeTrack(track) {
    const tracks = this.state.playlistTracks;
    const index = tracks.findIndex(t => t.id === track.id);
    if (index !== -1) {
      tracks.splice(index, 1);
      this.setState({
        playlistTracks: tracks
      });
    }
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  search(term) {
    Spotify.search(term)
    .then(results => {
      this.setState({
        searchResults: results
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist 
              name={this.state.playlistName} 
              tracks={this.state.playlistTracks} 
              onAdd={this.addTrack}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
