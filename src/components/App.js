import React from 'react';
import '../css/index.css';

function App() {
  return (
    <div className="mainWrapper" style={{ height: window.innerHeight }}>
      <a className="content" href="./deviceEvent">
        200209: Device Event Confirmation
      </a>
      <a className="content" href="./anchorEventAlpha">
        200223: CTA Anchor Event Confirmation
      </a>
      <a className="content" href="./dragAndDrop">
        200311 : Drag &amp; Drop
      </a>
    </div>
  );
}

export default App;
