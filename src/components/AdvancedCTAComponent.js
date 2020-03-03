import React, { Component } from 'react';
import Feedback from './Feedback';

class AdvancedCTAComponent extends Component {
  render() {
    const {href} = this.props;
    const advancedCTAFeedback = [
      'N/A'
    ];
    return (
      <div className="anchorCTAWrapper">
        <p>Advanced CTA</p>
        <a className="cta ctaAdvanced" href={`/anchorEvent${href}`}>
          Move to {href}
        </a>
        <Feedback feedBackArray={advancedCTAFeedback}/>
      </div>
    );
  }
}

export default AdvancedCTAComponent;
