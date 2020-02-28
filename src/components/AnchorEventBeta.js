import React, { Component } from 'react';
import { delayAnchor } from './Helper';

class AnchorEventBeta extends Component {
  render() {
    return (
      <div className="mainWrapper" style={{ height: window.innerHeight }}>
        <div className="anchorCTAWrapper">
          <h4>BETA</h4>
          <a
            className="anchorCTA"
            href="/anchorEventAlpha"
            onTouchEnd={this.onTouchEnd}
            onClick={this.onClick}>Move to Alpha</a>
        </div>
      </div>
    );
  }

  onTouchEnd = (e) => delayAnchor(e);
  onClick = (e) => delayAnchor(e);
}

export default AnchorEventBeta;
