import React, { Component } from 'react';
import { toggleClass, throttle } from './Helper';

class DragAndDrop extends Component {
  // CLASS VARIABLES
  xAxis;
  yAxis;
  xAxisStartEnd;
  yAxisStartEnd;
  xAxisEnd;
  yAxisEnd;
  xDistance;
  yDistance;

  // RENDER FUNCTION
  render() {
    return (
      <div className="mainWrapper fixed" style={{ height: window.innerHeight }}>
        <div className="iconCircle"
          // onMouseDown={this.onMouseDown}
          // onMouseMove={throttle(this.onMouseMove, 16)}
          // onMouseUp={this.onMouseUp}
          // onMouseLeave={this.onMouseUp}
          // onTouchCancel={this.onTouchEnd}
          onTouchStart={this.onTouchStart}
          onTouchMove={throttle(this.onTouchMove, 16)}
          onTouchEnd={this.onTouchEnd}>
        </div>
      </div>
    );
  }

  // EVENT FUNCTIONS
  onTouchStart = (e) => {
    console.log('--------------------------------');
    console.log('onTouchStart');
    toggleClass('.iconCircle', 'active', true);
    this.getCoordinates(e);
    this.updateStartEndCoordinate();
    // this.handleStart(e, 'Touch');
  }
  onTouchMove = (e) => {
    console.log('--------------------------------');
    console.log('onTouchMove');
    this.getCoordinates(e);
    this.calculateDistance();
    this.applyCoordinates();
    // this.handleMove(e);
  }
  onTouchEnd = (e) => {
    console.log('--------------------------------');
    console.log('onTouchEnd');
    toggleClass('.iconCircle', 'active', false);
    this.updateStartEndCoordinate();
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
    console.log(`this.xAxis: ${this.xAxis}`);
    console.log(`this.yAxis: ${this.yAxis}`);
  };
  updateStartEndCoordinate = () => {
    this.xAxisStartEnd = this.xAxis;
    this.yAxisStartEnd = this.yAxis;
    console.log(`this.xAxisStartEnd: ${this.xAxisStartEnd}`);
    console.log(`this.yAxisStartEnd: ${this.yAxisStartEnd}`);
  };
  calculateDistance = () => {
    this.xDistance = this.xAxis - this.xAxisStartEnd;
    this.yDistance = this.yAxis - this.yAxisStartEnd;
    console.log(`this.xDistance: ${this.xDistance}`);
    console.log(`this.yDistance: ${this.yDistance}`);

  };
  applyCoordinates = () => {
    const circle = document.querySelector('.iconCircle');
    circle.style = `transform: translate(
      calc(-50% + ${this.xDistance}px),
      calc(-50% + ${this.yDistance}px)
    );`
  };
}

export default DragAndDrop;
