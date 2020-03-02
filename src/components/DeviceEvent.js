import React, { Component } from 'react';
import { toggleClass, throttle } from './Helper';

class DeviceEvent extends Component {
  render() {
    return (
      <div className="mainWrapper"
        onMouseDown={this.onMouseDown}
        onMouseMove={throttle(this.onMouseMove, 16)}
        onMouseUp={this.onMouseUp}
        onMouseLeave={this.onMouseUp}
        onTouchStart={this.onTouchStart}
        onTouchMove={throttle(this.onTouchMove, 16)}
        onTouchEnd={this.onTouchEnd}
        onTouchCancel={this.onTouchEnd}
        style={{ height: window.innerHeight }}>
        <div className="locationIndicator"></div>
        <div className="deviceEventWrapper">
          <div className="statusContainer">
            <p className="statusElement cssAnyPointerCoarse">CSS / any-pointer: coarse</p>
            <p className="statusElement cssAnyPointerFine">CSS / any-pointer: fine</p>
            <p className="statusElement cssPointerCoarse">CSS / pointer: coarse</p>
            <p className="statusElement cssPointerFine">CSS / pointer: fine</p>
            <p className="statusElement cssAnyHoverNone">CSS / any-hover: none</p>
            <p className="statusElement cssAnyHover">CSS / any-hover: hover</p>
            <p className="statusElement cssHoverNone">CSS / hover: none</p>
            <p className="statusElement cssHover">CSS / hover: hover</p>
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

  // FUNCTIONS / START EVENT
  onTouchStart = (e) => {
    this.handleStart(e, 'Touch');
  }
  onMouseDown = (e) => {
    this.mouseIsDown = !this.mouseIsDown;
    this.handleStart(e, 'Mouse');
  };
  handleStart = (e, type) => {
    this.setXY(e);
    this.setIndicatorXY();
    toggleClass(`.js${type}`, 'active', true);
    toggleClass('.locationIndicator', 'active', true);
  };

  // FUNCTIONS / MOVE EVENT
  onTouchMove = (e) => {
    this.handleMove(e);
  }
  onMouseMove = (e) => {
    if (this.mouseIsDown) this.handleMove(e);
  };
  handleMove = (e) => {
    this.setXY(e);
    this.setIndicatorXY();
  };

  // FUNCTIONS / END EVENT
  onTouchEnd = (e) => {
    this.handleEnd('Touch');
    e.preventDefault();
  }
  onMouseUp = () => {
    this.mouseIsDown = !this.mouseIsDown;
    this.handleEnd('Mouse');
  };
  handleEnd = (type) => {
    this.setIndicatorXY();
    toggleClass(`.js${type}`, 'active', false);
    toggleClass('.locationIndicator', 'active', false);
  };

  // FUNCTIONS / OTHER
  setXY = (e) => {
    this.xCoordinate = Math.round(e.clientX) || Math.round(e.targetTouches[0].clientX);
    this.yCoordinate = Math.round(e.clientY) || Math.round(e.targetTouches[0].clientY);
    document.querySelector('#xCoordinate').innerText = this.xCoordinate;
    document.querySelector('#yCoordinate').innerText = this.yCoordinate;
  };
  setIndicatorXY = () => {
    const indicator = document.querySelector('.locationIndicator');
    indicator.style = `transform: translate(
                        calc(-50% + ${this.xCoordinate}px),
                        calc(-50% + ${this.yCoordinate}px)
                      )`;
  };
}

export default DeviceEvent;
