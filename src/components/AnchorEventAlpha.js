import React, { Component } from 'react';
import StandardCTAComponent from './StandardCTAComponent';
import AdvancedCTAComponent from './AdvancedCTAComponent';

class AnchorEventAlpha extends Component {
  render() {
    return (
      <div className="mainWrapper">
        <div className="ctaEventContainer">
          <h4>Alpha</h4>
          <div className="flex2Col">
            <StandardCTAComponent href="Beta"/>
            <AdvancedCTAComponent href="Beta"/>
          </div>
        </div>
      </div>
    );
  }
}

export default AnchorEventAlpha;
