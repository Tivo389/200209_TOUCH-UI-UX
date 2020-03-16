import React, { Component } from 'react';
import { toggleClass, throttle } from './Helper';

class DragAndDrop extends Component {
  // CLASS VARIABLES
  xAxis;
  yAxis;
  transformValue = '';
  mouseDown = false;

  // RENDER FUNCTION
  render() {
    return (
      <div
        className="circleContainer fixed"
        style={{ height: window.innerHeight }}
        onMouseLeave={this.onMouseLeave}>
        <div
          className="iconCircle"
          onMouseDown={this.onMouseDown}
          onMouseMove={throttle(this.onMouseMove, 16)}
          onMouseUp={this.onMouseUp}
          // onTouchStart={this.onTouchStart}
          // onTouchMove={throttle(this.onTouchMove, 8)}
          // onTouchEnd={this.onTouchEnd}
          >
        </div>
      </div>
    );
  }

  // HANDLER FUNCTION
  handleStart = (e) => {
    e.currentTarget.style = `transform: translate(${this.transformValue});`;
    this.getCoordinates(e);
    toggleClass('.iconCircle', 'active', true);
  };
  handleMove = (e) => {
    this.getCoordinates(e);
    this.applyCoordinates();
  };

  handleEnd = () => {
    toggleClass('.iconCircle', 'active', false);
    const iconCircle = document.querySelector('.iconCircle');
    const regexPattern = /\(.+\)/;
    const regexMatch = iconCircle.style.transform.match(regexPattern);
    this.transformValue = regexMatch[0].slice(1,-1);
  };

  // EVENT FUNCTIONS
  // onTouchStart = (e) => {
  //   this.handleStart(e);
  // }
  // onTouchMove = (e) => {
  //   this.handleMove(e);
  // }
  // onTouchEnd = (e) => {
  //   this.handleEnd();
  // }
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
  onMouseUp = () => {
    this.handleEnd();
    this.mouseDown = false;
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);
  };
  onMouseLeave = (e) => {
    if (this.mouseDown) { this.onMouseUp(); }
  }

  // COMPONENT FUNCTIONS
  getCoordinates = (e) => {
    if (e.touches && e.touches.length > 1) {
      return;
    } else if (window.pointerEvent) {
      this.xAxis = Math.round(e.targetTouches[0].clientX);
      this.yAxis = Math.round(e.targetTouches[0].clientY);
    } else {
      this.xAxis = Math.round(e.clientX);
      this.yAxis = Math.round(e.clientY);
    }
  };
  applyCoordinates = () => {
    const circle = document.querySelector('.iconCircle');
    circle.style = `transform: translate(
      ${this.xAxis - (document.querySelector('.circleContainer').offsetWidth / 2)}px,
      ${this.yAxis - (document.querySelector('.circleContainer').offsetHeight / 2)}px
    );`
  };
}

export default DragAndDrop;
