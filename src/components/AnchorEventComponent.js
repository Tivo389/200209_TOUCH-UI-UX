import React, { Component } from 'react';

class AnchorEventComponent extends Component {
  render() {
    const {href, name} = this.props;
    return (
      <div className="mainWrapper" style={{ height: window.innerHeight }}>
        <div className="anchorCTAWrapper">
          <h4>{name}</h4>
          <a
            className="anchorCTA"
            href={`/anchorEvent${href}`}>
              Move to {href}
          </a>
        </div>
      </div>
    );
  }
}

export default AnchorEventComponent;
