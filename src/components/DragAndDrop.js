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
  transformValue = '';
  mouseDown = false;

  // RENDER FUNCTION
  render() {
    return (
      <div className="circleContainer fixed" style={{ height: window.innerHeight }}>
        <div className="iconCircle"
          onMouseDown={this.onMouseDown}
          onMouseMove={this.onMouseMove}
          onMouseUp={this.onMouseUp}
          onTouchStart={this.onTouchStart}
          onTouchMove={throttle(this.onTouchMove, 8)}
          onTouchEnd={this.onTouchEnd}>
        </div>
      </div>
    );
  }

  // HANDLER FUNCTION
  handleStart = (e) => {
    console.log(this.transformValue);
    document.querySelector('.iconCircle').style = `transform: scale(0.90) ${this.transformValue};`;
    toggleClass('.iconCircle', 'active', true);
    this.getCoordinates(e);
  };
  handleMove = (e) => {
    this.getCoordinates(e);
    this.applyCoordinates();
  };

  handleEnd = (e) => {
    toggleClass('.iconCircle', 'active', false);
    this.transformValue = document.querySelector('.iconCircle').style.transform.slice(11);
    document.querySelector('.iconCircle').style.transform = this.transformValue;
  };

  // EVENT FUNCTIONS
  onTouchStart = (e) => {
    this.handleStart(e);
  }
  onTouchMove = (e) => {
    this.handleMove(e);
  }
  onTouchEnd = (e) => {
    this.handleEnd(e);
  }
  onMouseDown = (e) => {
    this.mouseDown = true;
    if (this.mouseDown) {
      this.handleStart(e);
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
    }
  };
  onMouseMove = (e) => {
    if (this.mouseDown) { this.handleMove(e); }
  };
  onMouseUp = (e) => {
    this.handleEnd(e);
    this.mouseDown = false;
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
  };

  // COMPONENT FUNCTIONS
  getCoordinates = (e) => {
    this.xAxis = Math.round(e.clientX) || Math.round(e.targetTouches[0].clientX);
    this.yAxis = Math.round(e.clientY) || Math.round(e.targetTouches[0].clientY);
  };
  applyCoordinates = () => {
    const circle = document.querySelector('.iconCircle');
    circle.style = `transform: scale(0.90) translate(
      ${this.xAxis - (document.querySelector('.circleContainer').offsetWidth / 2)}px,
      ${this.yAxis - (document.querySelector('.circleContainer').offsetHeight / 2)}px
    );`
  };
}

export default DragAndDrop;
