import React, { Component } from 'react';

class ComponentTemplate extends Component {
  // LIFECYCLE METHODS
  componentWillMount() {}
  componentDidMount() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  // RENDER OF COMPONENT
  render() {
    return (
      <div className="componentWrapper">
        <div className="statusContainer">
          <p className="statusElement">Touch Device</p>
          <p className="statusElement">Cursor Device</p>
          <p className="statusElement">X: ---.--</p>
          <p className="statusElement">Y: ---.--</p>
        </div>
      </div>
    );
  }

  // FUNCTION: BASIC EXPLANATION HERE
  // - Detailed explanation here
  sampleFunction = () => {
    console.log('sampleFunction!');
  };
}

export default ComponentTemplate;
