import React, { Component } from 'react';
import Feedback from './Feedback';

class StandardCTAComponent extends Component {
  render() {
    const {href} = this.props;
    const standardCTAFeedback = [
      'This CTA takes the conventional styling approach.',
      ':hover is reflected in desktop',
      ':hover is hinted in mobile Chrome and Safari',
      ':hover is reflected in mobile Firefox but not comfortably accessible',
      ':focus is reflected in desktop',
      ':focus is not reflected in mobile',
      ':active is reflected in desktop',
      ':active is reflected in mobile Firefox',
      ':active is not reflected in mobile Chrome and Safari',
      'Firefox reflects hover (ineffectively), does not reflect focus, reflects active',
      'Chrome and Safari hints hover, does not reflect focus, does not reflect active',
    ];
    return (
      <div className="ctaContainer">
        <p>Standard CTA</p>
        <a className="ctaStandard" href={`/anchorEvent${href}`}>
          Move to {href}
        </a>
        <Feedback feedBackArray={standardCTAFeedback}/>
      </div>
    );
  }
}

export default StandardCTAComponent;
