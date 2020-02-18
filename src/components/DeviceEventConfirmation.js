import React, { Component } from 'react';

class DeviceEventConfirmation extends Component {
  // COMPONENT VARIALBES
  state = {
    clientX: 0,
    clientY: 0
  }

  // LIFECYCLE METHODS
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    window.addEventListener('resize', this.handleResize);
  }

  // RENDER OF COMPONENT
  render() {
    return (
      <div className="mainWrapper"
        onTouchStart={this.handleGesture}
        onClick={this.handleGesture}
        onTouchEnd={e => e.preventDefault()}>
        <div className="componentWrapper">
          <div className="statusContainer">
            <p className="statusElement cssPointerCoarse">CSS / any-pointer: coarse</p>
            <p className="statusElement cssPointerFine">CSS / any-pointer: fine</p>
            <p className="statusElement jsTouch">JS / Touch Gesture</p>
            <p className="statusElement jsMouse">JS / Mouse Gesture</p>
            <p className="statusElement active">X: {this.state.clientX}</p>
            <p className="statusElement active">Y: {this.state.clientY}</p>
          </div>
        </div>
      </div>
    );
  }

  // FUNCTION: BASIC EXPLANATION HERE
  // - Detailed explanation here
  handleGesture = (e) => {
    if (e.touches && e.touches.length > 1) {
      return;
    } else if (window.PointerEvent) {
      if (e.targetTouches) {
        console.log('POINTER EVENT / TOUCH ----------');
        // console.log(`X-AXIS: ${e.targetTouches[0].clientX}`);
        // console.log(`Y-AXIS: ${e.targetTouches[0].clientY}`);
        const xAxis = Math.round(e.targetTouches[0].clientX);
        const yAxis = Math.round(e.targetTouches[0].clientY);
        this.setCoordinates(xAxis, yAxis);
      } else {
        console.log('POINTER EVENT / MOUSE ----------');
        // console.log(`X-AXIS: ${e.clientX}`);
        // console.log(`Y-AXIS: ${e.clientY}`);
        const xAxis = Math.round(e.clientX);
        const yAxis = Math.round(e.clientY);
        this.setCoordinates(xAxis, yAxis);
      }
    } else {
      // WILL WORK ON THIS LAST BUT NOT SURE HOW TO TEST THIS...
      console.log('STANDARD EVENT / TOUCH OR MOUSE ----------');
      console.log(`X-AXIS: ${e.clientX}`);
      console.log(`Y-AXIS: ${e.clientY}`);
    }
  };
  setCoordinates = (xAxis, yAxis) => {
    this.setState({
      clientX: xAxis,
      clientY: yAxis
    });
  };
}

export default DeviceEventConfirmation;
