import React from 'react';
import Track from '../track/Track';
import './Tracklist.css';

class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
          <Track />
      </div>
    );
  }
}

export default Tracklist;