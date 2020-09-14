import React from 'react';
import Tracklist from '../tracklist/Tracklist';
import './Playlist.css';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    console.log(event);
    const name = event.target.value;
    this.props.onNameChange(name);
  }

  render() {
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={this.props.name}/>
        <Tracklist tracks={this.props.tracks} 
          isRemoval={true} 
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}/>
        <button onSave={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;