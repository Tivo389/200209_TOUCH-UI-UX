import React, { Component } from 'react';
import AnchorEventComponent from './AnchorEventComponent';

class AnchorEventBeta extends Component {
  render() {
    const standardCopy = [
      '200228 / :active works as expected on desktop browsers.',
      '200228 / :active works as expected only on Firefox in mobile.',
      '200228 / :active does not reflect on Chrome and Safari in mobile.'
    ];
    return (
      <AnchorEventComponent
        name="Beta"
        href="Alpha"
        standardCopy={standardCopy}/>
    );
  }
}

export default AnchorEventBeta;
