import React, { Component } from 'react';
import StandardCTAComponent from './StandardCTAComponent';
import AdvancedCTAComponent from './AdvancedCTAComponent';

class AnchorEventBeta extends Component {
  render() {
    return (
      <div className="mainWrapper">
        <div className="ctaEventContainer">
          <h4>Beta</h4>
          <div className="flex2Col">
            <StandardCTAComponent href="Alpha"/>
            <AdvancedCTAComponent href="Alpha"/>
          </div>
        </div>
      </div>
    );
  }
}

export default AnchorEventBeta;
