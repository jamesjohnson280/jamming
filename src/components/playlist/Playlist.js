import React from 'react';
import Tracklist from '../tracklist/Tracklist';
import './Playlist.css';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <Tracklist tracks={this.props.tracks} 
          isRemoval={true} 
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;