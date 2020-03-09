import React, { Component } from 'react';

class ObservationCTAComponent extends Component {
  render() {
    const {href} = this.props;
    return (
      <div className="ctaContainer">
        <p>STANDARD / OBSERVATION / CSS</p>
        <a className="cta ctaObservation" href={`/anchorEvent${href}`}>
          Move to {href}
        </a>
      </div>
    );
  }
}

export default ObservationCTAComponent;
