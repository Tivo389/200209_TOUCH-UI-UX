import React, { Component } from 'react';

class DeviceEventConfirmation extends Component {
  // COMPONENT VARIALBES
  state = {}
  xCoordinate = 0;
  yCoordinate = 0;
  mouseIsDown = false;

  // LIFECYCLE METHODS
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  // RENDER OF COMPONENT
  render() {
    return (
      <div className="mainWrapper"
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
        style={{ height: window.innerHeight }}>
        <div className="componentWrapper">
          <div className="statusContainer">
            <p className="statusElement cssPointerCoarse">CSS / any-pointer: coarse</p>
            <p className="statusElement cssPointerFine">CSS / any-pointer: fine</p>
            <p className="statusElement jsTouch">JS / Touch Gesture</p>
            <p className="statusElement jsMouse">JS / Mouse Gesture</p>
            <p className="statusElement active">X:&ensp;
              <span id="xCoordinate">{this.xCoordinate}</span>
            </p>
            <p className="statusElement active">Y:&ensp;
              <span id="yCoordinate">{this.yCoordinate}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // FUNCTION: BASIC EXPLANATION HERE
  onTouchStart = () => {
    this.toggleClass('.jsTouch', 'active', true);
  }
  onTouchMove = (e) => {
    this.setCoordinates(e);
  }
  onTouchEnd = (e) => {
    e.preventDefault();
    this.toggleClass('.jsTouch', 'active', false);
  }
  onMouseDown = () => {
    this.toggleClass('.jsMouse', 'active', true);
    this.mouseIsDown = !this.mouseIsDown;
  };
  onMouseMove = (e) => {
    if (this.mouseIsDown) this.setCoordinates(e);
  };
  onMouseUp = () => {
    this.toggleClass('.jsMouse', 'active', false);
    this.mouseIsDown = !this.mouseIsDown;
  };
  toggleClass = (targetNode, className, boolean) => {
    if (boolean) {
      document.querySelector(targetNode).classList.add(className);
    } else {
      document.querySelector(targetNode).classList.remove(className);
    }
  };
  setCoordinates = (e) => {
    const xAxis = Math.round(e.clientX) || Math.round(e.targetTouches[0].clientX);
    const yAxis = Math.round(e.clientY) || Math.round(e.targetTouches[0].clientY);
    document.querySelector('#xCoordinate').innerText = xAxis;
    document.querySelector('#yCoordinate').innerText = yAxis;
  };
}

export default DeviceEventConfirmation;
