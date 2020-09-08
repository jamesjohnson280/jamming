import React from 'react';
import './Track.css';

class Track extends React.Component {
  renderAction() {
    if (this.props.isRemoval) {
      return '-';
    } else {
      return '+';
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>March of the pigs</h3>
          <p>Nine Inch Nails | The Downward Spiral</p>
        </div>
        <button className="Track-action">+</button>
      </div>
    );
  }
}

export default Track;