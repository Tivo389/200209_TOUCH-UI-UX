import React, { Component } from 'react';
import ObservationCTAComponent from './ObservationCTAComponent';
import AdvancedCTAComponent from './AdvancedCTAComponent';
import ProductionCTAComponent from './ProductionCTAComponent';
import TouchEventDisplay from './TouchEventDisplay';
import { toggleClass } from './Helper';

class AnchorEventAlpha extends Component {
  render() {
    return (
      <div
        className="mainWrapper"
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}>
        <TouchEventDisplay/>
        <div className="ctaEventContainer">
          <h4>Alpha</h4>
            <ObservationCTAComponent href="Beta"/>
            <AdvancedCTAComponent href="Beta"/>
            <ProductionCTAComponent href="Beta"/>
        </div>
      </div>
    );
  }
  onTouchStart = () => {
    toggleClass('#touchStart', 'active', true);
  };
  onTouchMove = () => {
    toggleClass('#touchMove', 'active', true);
  };
  onTouchEnd = () => {
    toggleClass('#touchEnd', 'active', true);
    toggleClass('#touchStart', 'active', false);
    toggleClass('#touchMove', 'active', false);
    setTimeout(() => {toggleClass('#touchEnd', 'active', false)}, 200);
  };
}

export default AnchorEventAlpha;
