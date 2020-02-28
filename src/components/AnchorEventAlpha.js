import React, { Component } from 'react';
import { delayAnchor } from './Helper';

class AnchorEventAlpha extends Component {
  render() {
    return (
      <div className="mainWrapper" style={{ height: window.innerHeight }}>
        <div className="anchorCTAWrapper">
          <h4>ALPHA</h4>
          <a
            className="anchorCTA"
            href="/anchorEventBeta"
            onTouchEnd={this.onTouchEnd}
            onClick={this.onClick}>Move to Beta</a>
        </div>
      </div>
    );
  }
  // 999 On touch end if the finger was moved outside of the cta, cancel the anchor
  onTouchEnd = (e) => delayAnchor(e);
  onClick = (e) => delayAnchor(e);
}

export default AnchorEventAlpha;
