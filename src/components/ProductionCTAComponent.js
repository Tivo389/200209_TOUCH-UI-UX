import React, { Component } from 'react';

class ProductionCTAComponent extends Component {
  render() {
    const {href} = this.props;
    return (
      <div className="ctaContainer">
        <p>Advanced / Production / CSS &amp; JS</p>
        <a
          className="ctaProduction"
          href={`/anchorEvent${href}`}
          onTouchStart={this.onTouchStart}
          onTouchEnd={this.onTouchEnd}
          onTouchCancel={this.onTouchCancel}>
          Move to {href}
        </a>
      </div>
    );
  }
  onTouchStart = (e) => {
    e.currentTarget.classList.add('active');
  };
  onTouchEnd = (e) => {
    e.currentTarget.classList.remove('active');
  };
  onTouchCancel = (e) => {
    e.currentTarget.classList.remove('active');
  };
}

export default ProductionCTAComponent;
