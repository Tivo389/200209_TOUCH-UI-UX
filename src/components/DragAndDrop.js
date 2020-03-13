import React, { Component } from 'react';
import { toggleClass, throttle } from './Helper';

class DragAndDrop extends Component {
  // CLASS VARIABLES
  xAxis;
  yAxis;
  xAxisStartEnd;
  yAxisStartEnd;
  xAxisStartEnd;
  yAxisStartEnd;
  xDistance;
  yDistance;

  // RENDER FUNCTION
  render() {
    return (
      <div className="circleContainer fixed" style={{ height: window.innerHeight }}>
        <div className="iconCircle"
          // onMouseDown={this.onMouseDown}
          // onMouseMove={throttle(this.onMouseMove, 16)}
          // onMouseUp={this.onMouseUp}
          // onMouseLeave={this.onMouseUp}
          // onTouchCancel={this.onTouchEnd}
          onTouchStart={this.onTouchStart}
          onTouchMove={throttle(this.onTouchMove, 8)}
          onTouchEnd={this.onTouchEnd}>
        </div>
      </div>
    );
  }

  // EVENT FUNCTIONS
  onTouchStart = (e) => {
    toggleClass('.iconCircle', 'active', true);
    this.getCoordinates(e);
    // this.handleStart(e, 'Touch');
  }
  onTouchMove = (e) => {
    this.getCoordinates(e);
    this.applyCoordinates();
    // this.handleMove(e);
  }
  onTouchEnd = (e) => {
    toggleClass('.iconCircle', 'active', false);
    // this.handleEnd('Touch');
    // e.preventDefault();
  }

  onMouseMove = (e) => {
    // if (this.mouseIsDown) this.handleMove(e);
  };
  onMouseDown = (e) => {
    // this.mouseIsDown = !this.mouseIsDown;
    // this.handleStart(e, 'Mouse');
  };
  onMouseUp = () => {
    // this.mouseIsDown = !this.mouseIsDown;
    // this.handleEnd('Mouse');
  };
  handleStart = (e, type) => {
    // this.setXY(e);
    // this.setIndicatorXY();
    // toggleClass(`.js${type}`, 'active', true);
    // toggleClass('.locationIndicator', 'active', true);
  };
  handleMove = (e) => {
    // this.setXY(e);
    // this.setIndicatorXY();
  };

  handleEnd = (type) => {
    // this.setIndicatorXY();
    // toggleClass(`.js${type}`, 'active', false);
    // toggleClass('.locationIndicator', 'active', false);
  };

  // COMPONENT FUNCTIONS
  getCoordinates = (e) => {
    this.xAxis = Math.round(e.clientX) || Math.round(e.targetTouches[0].clientX);
    this.yAxis = Math.round(e.clientY) || Math.round(e.targetTouches[0].clientY);
  };
  applyCoordinates = () => {
    const circle = document.querySelector('.iconCircle');
    circle.style = `transform: translate(
      ${this.xAxis - (window.innerWidth / 2)}px,
      ${this.yAxis - (window.innerHeight / 2)}px
    );`
  };
}

export default DragAndDrop;
