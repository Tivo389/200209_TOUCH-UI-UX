import React, { Component } from 'react';
import { toggleClass, throttle } from './Helper';

class DragAndDrop extends Component {
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

  onTouchStart = (e) => {
    // this.handleStart(e, 'Touch');
    toggleClass('.iconCircle', 'active', true);
  }
  onTouchMove = (e) => {
    // this.handleMove(e);
    // 999 CONTINUE HERE
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

  // FUNCTIONS / OTHER
  setXY = (e) => {
    // this.xCoordinate = Math.round(e.clientX) || Math.round(e.targetTouches[0].clientX);
    // this.yCoordinate = Math.round(e.clientY) || Math.round(e.targetTouches[0].clientY);
    // document.querySelector('#xCoordinate').innerText = this.xCoordinate;
    // document.querySelector('#yCoordinate').innerText = this.yCoordinate;
  };
}

export default DragAndDrop;
