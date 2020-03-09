import React, { Component } from 'react';

class TouchEventDisplay extends Component {
  render() {
    return (
      <div className="touchEventContainer">
        <div className="statusContainer flexRow">
          <p id="touchStart" className="statusElement touchEventElement">touchStart</p>
          <p id="touchMove" className="statusElement touchEventElement">touchMove</p>
          <p id="touchEnd" className="statusElement touchEventElement touchEnd">touchEnd</p>
        </div>
      </div>
    );
  }
}

export default TouchEventDisplay;
