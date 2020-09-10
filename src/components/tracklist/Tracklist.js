import React from 'react';
import Track from '../track/Track';
import './Tracklist.css';

class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
          {this.props.tracks.map(track => <Track key={track.id} track={track}/>)}
      </div>
    );
  }
}

export default Tracklist;