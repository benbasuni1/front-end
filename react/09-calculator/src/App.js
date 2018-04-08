import React, { Component } from 'react';
import Keys from './Keys';
import calculate from './logic/calculation';

import './bootstrap.min.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    let buttonName = e.currentTarget.innerHTML.toUpperCase();
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <div className="component-app">
        <Keys clickHandler={this.handleClick} total={this.state.total || this.state.next || 0} />
      </div>
    );
  }
}

export default App;
