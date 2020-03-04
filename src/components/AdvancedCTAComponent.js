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
    );
  }
  componentDidMount() {
    const onFirstTouch = () => {
      document.body.classList.add('touch');
      window.removeEventListener('touchstart', onFirstTouch, false);
    };
    window.addEventListener('touchstart', onFirstTouch, false);
  }
}

export default AdvancedCTAComponent;
