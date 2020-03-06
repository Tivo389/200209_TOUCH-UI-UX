import React, { Component } from 'react';
import Feedback from './Feedback';

class AdvancedCTAComponent extends Component {
  render() {
    const {href} = this.props;
    const advancedCTAFeedback = [
      'N/A'
    ];
    return (
      <div className="ctaContainer">
        <p>Advanced CTA</p>
        <a className="ctaAdvanced" href={`/anchorEvent${href}`}>
          Move to {href}
        </a>
        <Feedback feedBackArray={advancedCTAFeedback}/>
      </div>
      // https://stackoverflow.com/questions/6406976/how-to-trigger-css-hover-state-using-javascript/6407065
      // https://stackoverflow.com/questions/4347116/trigger-css-hover-with-js

    );
  }
}

export default AdvancedCTAComponent;
