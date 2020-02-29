import React, { Component } from 'react';

class AnchorEventComponent extends Component {
  render() {
    const {href, name, standardCopy} = this.props;
    return (
      <div className="mainWrapper" style={{ height: window.innerHeight }}>
        <div className="anchorEventWrapper">
          <h4>{name}</h4>
          <div className="anchorCTAWrapper">
            <a className="anchorCTAStandard" href={`/anchorEvent${href}`}>
                Move to {href}
            </a>
            <p>Standard CTA</p>
            <ul>
              {standardCopy.map((element, key) => (
                <li key={key}>{element}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AnchorEventComponent;
