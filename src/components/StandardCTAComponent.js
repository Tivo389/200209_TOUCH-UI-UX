import React, { Component } from 'react';
import Feedback from './Feedback';

class StandardCTAComponent extends Component {
  render() {
    const {href} = this.props;
    const standardCTAFeedback = [
      '200228 / This CTA takes the conventional focus, hover, active flow.',
      '200228 / :active is reflected on desktop CFS browsers.',
      '200228 / :active is reflected only in Firefox in mobile.  Feedback is provided.',
      '200228 / :active is not reflected in Chrome and Safari mobile. Feedback is not provided.',
      '200301 / :focus is reflected in desktop',
      '200301 / :focus is not reflected in mobile',
      '200301 / :hover is reflected in desktop',
      '200301 / :hover is reflected in mobile with slight inconsistency between browsers. However, if hover css media feature is used it is (understandably) not reflected. Using hover css media offered better consistency in mobile. However lack of feedback is an issue.',
    ];
    return (
      <div className="anchorCTAWrapper">
        <p>Standard CTA</p>
        <a className="cta ctaStandard" href={`/anchorEvent${href}`}>
          Move to {href}
        </a>
        <Feedback feedBackArray={standardCTAFeedback}/>
      </div>
    );
  }
}

export default StandardCTAComponent;
