import React, { Component } from 'react';
import './welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <p>This is a public-facing component, no login required</p>
      </div>
    )
  }
}

export default Welcome;
