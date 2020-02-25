import React, { Component } from 'react';

class AnchorEvent extends Component {
  // COMPONENT VARIALBES
  state = { foo: true };
  // - As a state it would require setState(), resulting in a rapid-rendering.
  bar = false;

  // LIFECYCLE METHODS
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  // RENDER OF COMPONENT
  render() {
    return (
      <div className="mainWrapper" style={{ height: window.innerHeight }}>
        <div className="anchorCTAWrapper">
          <a
            className="anchorCTA"
            href="./anchorEvent"
            onTouchStart="this.onTouchStart">Learn more</a>
        </div>
      </div>
    );
  }

  // FUNCTION: BASIC EXPLANATION HERE
  // - Detailed explanation here
  onTouchStart = (e) => {
    e.preventDefault();
    // 999 CONTINUE HERE ADDBACK GROUND AN REMOVE ON DONE
  };
}

export default AnchorEvent;
