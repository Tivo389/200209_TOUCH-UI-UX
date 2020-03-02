import React, { Component } from 'react';
import Feedback from './Feedback';

class AnchorEventComponent extends Component {
  render() {
    const {href, name} = this.props;
    const standardCTAFeedback = [
      '200228 / This CTA takes the conventional focus, hover, active flow.',
      '200228 / :active is reflected on desktop CFS browsers.',
      '200228 / :active is reflected only in Firefox in mobile.',
      '200228 / :active is not reflected in Chrome and Safari mobile.',
      '200301 / :focus is reflected in desktop',
      '200301 / :focus is not reflected in mobile',
      '200301 / :hover is reflected in desktop',
      '200301 / :hover is reflected in mobile. However, if hover css media feature is used it is (understandably) not reflected. Using hover css media offered better consistency in mobile.',
    ];
    return (
      <div className="mainWrapper" style={{ height: window.innerHeight }}>
        <div className="anchorEventWrapper">
          <h4>{name}</h4>
          <div className="anchorCTAWrapper">
            <a className="anchorCTAStandard" href={`/anchorEvent${href}`}>
                Move to {href}
            </a>
            <p>Standard CTA</p>
            <Feedback feedBackArray={standardCTAFeedback}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AnchorEventComponent;
