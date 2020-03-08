import React, { Component } from 'react';
import ObservationCTAComponent from './ObservationCTAComponent';
import AdvancedCTAComponent from './AdvancedCTAComponent';
import ProductionCTAComponent from './ProductionCTAComponent';

class AnchorEventAlpha extends Component {
  render() {
    return (
      <div className="mainWrapper">
        <div className="ctaEventContainer">
          <h4>Alpha</h4>
            <ObservationCTAComponent href="Beta"/>
            <AdvancedCTAComponent href="Beta"/>
            <ProductionCTAComponent href="Beta"/>
        </div>
      </div>
    );
  }
}

export default AnchorEventAlpha;
