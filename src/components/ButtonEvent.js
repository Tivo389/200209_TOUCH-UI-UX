import React, { Component } from 'react';

class ButtonEvent extends Component {
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
        <h1>Hello World!</h1>
      </div>
    );
  }

  // FUNCTION: BASIC EXPLANATION HERE
  // - Detailed explanation here
  sampleFunction = () => {
    console.log('sampleFunction!');
  };
}

export default ButtonEvent;
