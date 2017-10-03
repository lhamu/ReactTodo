import React, { Component } from 'react';
import * as httpUtils from './HttpUtils';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li className="list-item">Add new todo.</li>
          <li className="list-item">Completed</li>
          <li className="list-item">To be completed</li>
        </ul>
      </div>
    );
  }
}

export default NavigationBar;
