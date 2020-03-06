import React, { Component } from 'react';
import Feedback from './Feedback';

class StandardCTAComponent extends Component {
  render() {
    const {href} = this.props;
    const standardCTAFeedback = [
      '200304',
      'This CTA takes the conventional styling approach.',
      ':hover is reflected in desktop',
      ':focus is reflected in desktop',
      ':active is reflected in desktop',
      'Chrome iOS / Quick tap / Seems to go :active > :hover with a partial colour transition.',
      'Chrome iOS / Tap / :active is reflected with full colour transition.',
      'Chrome iOS / Tap > Hold > Scroll / Goes :active but stays on :hover upon touchEnd.',
      'Chrome iOS / Tap > Hold > Scroll / Consecutive states were not reflected in some cases.',
      'Firefox iOS / Quick tap / Same as Chrome.',
      'Firefox iOS / Tap / Same as Chrome.',
      'Firefox iOS / Tap > Hold > Scroll / Same as Chrome. No issue with consecutive states.',
      'Safari iOS / Quick tap / Same as Chrome.',
      'Safari iOS / Tap / Almost same as Chrome. Seems to hint the hover state upon touchEnd.',
      'Safari iOS / Tap > Hold > Scroll / Same as Chrome. However, was stuck in :hover state.',
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
