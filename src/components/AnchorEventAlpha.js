import React, { Component } from 'react';

class AnchorEventAlpha extends Component {
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
          <h4>ALPHA</h4>
          <a
            className="anchorCTA"
            href="/anchorEventBeta"
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            onClick={this.onClick}>Move to Beta</a>
        </div>
      </div>
    );
  }

  // FUNCTION: BASIC EXPLANATION HERE
  // - Detailed explanation here
  onTouchStart = (e) => {
    e.preventDefault();
  };
  onTouchEnd = (e) => {
    const navTarget = e.currentTarget.getAttribute('href');
    e.preventDefault();
    setTimeout(() => {
      window.location.href = navTarget
    }, 100);
  };
  onClick = (e) => {
    const navTarget = e.currentTarget.getAttribute('href');
    e.preventDefault();
    setTimeout(() => {
      window.location.href = navTarget
    }, 100);
  };
}

export default AnchorEventAlpha;
