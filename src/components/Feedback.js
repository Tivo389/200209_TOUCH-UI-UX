import React, { Component } from 'react';

class Feedback extends Component {
  render() {
    return (
      <ul className='feedback'>
        {this.props.feedBackArray.map((element, key) => (
          <li key={key}>{element}</li>
        ))}
      </ul>
    );
  }
}

export default Feedback;
