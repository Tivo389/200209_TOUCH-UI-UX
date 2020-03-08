import React, { Component } from 'react';
import ObservationCTAComponent from './ObservationCTAComponent';
import AdvancedCTAComponent from './AdvancedCTAComponent';
import ProductionCTAComponent from './ProductionCTAComponent';

class AnchorEventBeta extends Component {
  render() {
    return (
      <div className="mainWrapper">
        <div className="ctaEventContainer">
          <h4>Beta</h4>
            <ObservationCTAComponent href="Alpha"/>
            <AdvancedCTAComponent href="Alpha"/>
            <ProductionCTAComponent href="Alpha"/>
        </div>
      </div>
    );
  }
}

export default AnchorEventBeta;
